import React, { useState, useEffect } from "react";
import * as S from "./styles.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import FormField from "../../components/FormField";
import CampaignContract from "../../contracts/Campaign.json";
import Web3 from "web3";
import { toWei } from "../../utils";
import Loader from "../../components/Loader";
import notify from "../../utils/Toast";
import { toDays } from "../../utils";
import { shortenAddress } from "../../utils";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [address, setAddress] = useState(null);
  const [form, setForm] = useState({
    amount: "",
  });

  const [title, setTitle] = useState(null);
  const [url, setUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [collected, setCollected] = useState(null);
  const [donations, setDonations] = useState(null);
  const [owner, setOwner] = useState(null);
  const [backers, setBackers] = useState(null);
  const [isCompleted, setIsCompleted] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [target, setTarget] = useState(null);

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const dateInSecs = Math.floor(new Date().getTime() / 1000);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      setIsLoading(true);

      const web3 = new Web3(Web3.givenProvider);
      const accounts = await web3.eth.getAccounts();
      setAddress(accounts[0]);
      const instance = new web3.eth.Contract(
        CampaignContract.abi,
        location.state
      );

      const endDate = await instance.methods.endDate().call();
      const title = await instance.methods.title().call();
      const url = await instance.methods.url().call();
      const description = await instance.methods.description().call();
      const collected = await instance.methods.collected().call();
      const donations = await instance.methods.getDonations().call();
      const owner = await instance.methods.owner().call();
      const backers = await instance.methods.getBackers().call();
      const isCompleted = await instance.methods.isCompleted().call();
      const target = await instance.methods.target().call();

      setAddress(accounts[0]);
      setEndDate(endDate);
      setTitle(title);
      setUrl(url);
      setDescription(description);
      setCollected(toWei(collected));
      setDonations(donations.length);
      setOwner(owner);
      setBackers(backers);
      setTimeLeft(toDays(endDate - dateInSecs));
      setWeb3(web3);
      setContract(instance);
      setAccounts(accounts);
      setIsCompleted(isCompleted);
      setTarget(toWei(target));

      if (endDate < dateInSecs && !isCompleted) {
        await instance.methods.claimTimeout().send({ from: accounts[0] });
      }

      setIsLoading(false);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  const uniqueBackers = [...new Set(backers)].map((value, index) => {
    return (
      <S.TxBlock>
        <S.ListEl>{shortenAddress(value, 10, 27)}</S.ListEl>
      </S.TxBlock>
    );
  });

  const filterPartiticipators = () => {
    if (address === owner && isCompleted) {
      return {
        isAllowed: true,
        msg: "Congratulations, your campaign has been successfully completed.",
      };
    } else if (isCompleted) {
      return {
        isAllowed: true,
        msg: "This campaign has been successfully completed. You can longer particicpate in it.",
      };
    } else if (address === owner) {
      return {
        isAllowed: true,
        msg: "You cannot partitcipate in your own campaigns.",
      };
    } else
      return {
        isAllowed: false,
      };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const donation = web3.utils.toWei(form.amount, "ether");

      await contract.methods
        .donateToCampaign()
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
        <S.Title>{title}</S.Title>
      </S.TitleContainer>
      <S.InfoWrapper>
        {filterPartiticipators().isAllowed && (
          <S.CompletionWarning>
            {filterPartiticipators().msg}
          </S.CompletionWarning>
        )}
        <S.FrontInfo>
          <S.Img
            style={{
              gridColumn: `${
                filterPartiticipators().isAllowed ? "span 4" : "span 2"
              }`,
            }}
            src={url}
          />

          <S.Form
            style={{
              display: `${filterPartiticipators().isAllowed ? "none" : "flex"}`,
            }}
            onSubmit={handleSubmit}
          >
            <S.FormHeading>Fund this compaign</S.FormHeading>
            <FormField
              id="outlined-bare"
              placeholder="0.5"
              value={form.amount}
              handleChange={(e) => handleFormFieldChange("amount", e)}
            />
            <S.DonateInfo>
              We have a 0% platform fee for organizers.
            </S.DonateInfo>
            <S.Button disabled={!form.amount}>Contribute</S.Button>
          </S.Form>
        </S.FrontInfo>
        <S.ProjectInfo>
          <S.InfoBox>
            <S.InfoVal>{timeLeft ? timeLeft : 0}</S.InfoVal>
            <S.InfoContext>time</S.InfoContext>
            <S.InfoDetails>Left</S.InfoDetails>
          </S.InfoBox>
          <S.InfoBox>
            <S.InfoVal>
              <i className="fa-brands fa-ethereum" /> {collected} / {target}
            </S.InfoVal>
            <S.InfoContext>raised</S.InfoContext>
            <S.InfoDetails>Total so far</S.InfoDetails>
          </S.InfoBox>
          <S.InfoBox>
            <S.InfoVal>{donations}</S.InfoVal>
            <S.InfoContext>donations</S.InfoContext>
            <S.InfoDetails>Received</S.InfoDetails>
          </S.InfoBox>
        </S.ProjectInfo>
        <S.Author>
          This fundraiser campaign was started by{" "}
          <S.AuthorAddress>{owner}</S.AuthorAddress>
        </S.Author>
        <S.CompaignDetails>
          <S.Story>
            <S.Heading>Story</S.Heading>
            <S.Description>{description}</S.Description>
          </S.Story>
          <S.Backers>
            <S.Heading>Backers ({uniqueBackers.length})</S.Heading>
            {donations ? (
              <S.BackersList>{uniqueBackers}</S.BackersList>
            ) : (
              <S.Description>Be the first to fund this campaign!</S.Description>
            )}
          </S.Backers>
        </S.CompaignDetails>
      </S.InfoWrapper>
    </S.Wrapper>
  );
};

export default Details;
