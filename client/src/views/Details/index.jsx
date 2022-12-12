import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormField from "../../components/FormField";
import detectEthereumProvider from "@metamask/detect-provider";
import CrowdfundingContract from "../../contracts/Crowdfunding.json";
import Web3 from "web3";
import * as S from "./styles.jsx";
import { toWei } from "../../utils";
import Loader from "../../components/Loader";
import notify from "../../utils/Toast";
import { shortenAddress } from "../../utils";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [funds, setFunds] = useState();
  const [accounts, setAccounts] = useState(null);
  const [form, setForm] = useState({
    amount: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  useEffect(() => {
    init();
  }, []);

  const countBackers = () => {
    return new Set(location.state.backers).size;
  };

  const backers = [...new Set(location.state.backers)].map((value, index) => {
    return (
      <S.TxBlock>
        <S.ListEl>{value}</S.ListEl>
      </S.TxBlock>
    );
  });

  const init = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const networkId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();
      const deployedNetwork = CrowdfundingContract.networks[networkId];
      const instance = new web3.eth.Contract(
        CrowdfundingContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      setWeb3(web3);
      setContract(instance);
      setAccounts(accounts);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const provider = await detectEthereumProvider();
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = CrowdfundingContract.networks[networkId];
      const accounts = await web3.eth.getAccounts();

      const instance = new web3.eth.Contract(
        CrowdfundingContract.abi,
        deployedNetwork.address
      );

      const donation = web3.utils.toWei(form.amount, "ether");

      await contract.methods
        .donateToCampaign(location.state.id)
        .send({ value: donation, from: accounts[0] });

      navigate("/home");
      notify("Successful transaction");
    } catch (error) {
      notify("Transaction rejected");
    }
    setIsLoading(false);
  };
  return (
    <S.Wrapper>
      {isLoading && <Loader />}
      <S.TitleContainer>
        <S.Title>{location.state.title}</S.Title>
      </S.TitleContainer>
      <S.InfoWrapper>
        <S.FrontInfo>
          <S.Img src={location.state.image} />
          <S.Form onSubmit={handleSubmit}>
            <S.FormHeading>Fund this compaign</S.FormHeading>
            <FormField
              id="outlined-bare"
              placeholder="ETH 0.5"
              value={form.amount}
              handleChange={(e) => handleFormFieldChange("amount", e)}
            />
            <S.DonateInfo>
              GoFundMe has a 0% platform fee for organizers.
            </S.DonateInfo>
            <S.Button disabled={!form.amount}>Contribute</S.Button>
          </S.Form>
        </S.FrontInfo>
        <S.ProjectInfo>
          <S.InfoBox>
            <S.InfoVal>{countBackers()}</S.InfoVal>
            <S.InfoContext>backers</S.InfoContext>
            <S.InfoDetails>Helped</S.InfoDetails>
          </S.InfoBox>
          <S.InfoBox>
            <S.InfoVal>ETH {toWei(location.state.collected)}</S.InfoVal>
            <S.InfoContext>raised</S.InfoContext>
            <S.InfoDetails>Total so far</S.InfoDetails>
          </S.InfoBox>
          <S.InfoBox>
            <S.InfoVal>{location.state.donations.length}</S.InfoVal>
            <S.InfoContext>donations</S.InfoContext>
            <S.InfoDetails>Received</S.InfoDetails>
          </S.InfoBox>
        </S.ProjectInfo>
        <S.Author>
          This foundraiser compaign was started by{" "}
          <S.AuthorAddress>{location.state.owner}</S.AuthorAddress>
        </S.Author>
        <S.CompaignDetails>
          <S.Story>
            <S.Heading>Story</S.Heading>
            <S.Description>{location.state.description}</S.Description>
          </S.Story>
          <S.Backers>
            <S.Heading>Backers</S.Heading>
            {location.state.donations.length ? (
              <S.BackersList>{backers}</S.BackersList>
            ) : (
              <S.Description>Be the first to fund this compaign!</S.Description>
            )}
          </S.Backers>
        </S.CompaignDetails>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default Details;
