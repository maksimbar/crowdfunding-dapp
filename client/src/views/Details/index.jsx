import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FormField from "../../components/FormField/index.jsx";
import detectEthereumProvider from "@metamask/detect-provider";
import CrowdfundingContract from "../../contracts/Crowdfunding.json";
import Web3 from "web3";
import * as S from "./styles.jsx";

const Details = () => {
  const location = useLocation();
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

    const provider = await detectEthereumProvider();
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = CrowdfundingContract.networks[networkId];
    const accounts = await web3.eth.getAccounts();

    const instance = new web3.eth.Contract(
      CrowdfundingContract.abi,
      deployedNetwork.address
    );

    await contract.methods
      .donateToCampaign(0)
      .send({ value: form.amount, from: accounts[0] });

    // funds = await instance.methods.show().call();
    // setFunds(funds);
    // console.log(funds);
    console.log("Successfully created fundraiser");
  };

  return (
    <>
      <S.TitleContainer>
        <S.Title>Vesper 2: Vibrator Necklace</S.Title>
        <S.Subtitle>Express your desire</S.Subtitle>
      </S.TitleContainer>
      <S.Wrapper>
        <S.Img src={location.state.image} />
        <S.BoxContainer>
          <S.Box>
            <S.BoxVal>{location.state.amountCollected}</S.BoxVal>
            <S.BoxContext>pledged of {location.state.target} goal</S.BoxContext>
          </S.Box>
          <S.Box>
            <S.BoxVal>1,380</S.BoxVal>
            <S.BoxContext>backers</S.BoxContext>
          </S.Box>
          <S.Box>
            <S.BoxVal>{location.state.deadline}</S.BoxVal>
            <S.BoxContext>days to go</S.BoxContext>
          </S.Box>
        </S.BoxContainer>
        <S.Form onSubmit={handleSubmit}>
          <FormField
            labelName="Campaign title*"
            id="outlined-bare"
            placeholder="Fundraiser Title"
            value={form.amount}
            handleChange={(e) => handleFormFieldChange("amount", e)}
          />
          <button>submit</button>
        </S.Form>
        <S.Story>
          <S.Heading>Story</S.Heading>
          <S.Description>{location.state.description}</S.Description>
        </S.Story>
      </S.Wrapper>
    </>
  );
};

export default Details;
