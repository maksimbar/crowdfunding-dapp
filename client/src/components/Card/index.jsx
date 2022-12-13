import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles.jsx";
import { shortenAddress } from "../../utils/index.js";
import { toWei } from "../../utils/index.js";
import CrowdfundingContract from "../../contracts/Campaign.json";
import Web3 from "web3";

const Card = ({ fundraiser }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState(null);
  const [url, setUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [collected, setCollected] = useState(null);
  const [donations, setDonations] = useState(null);
  const [owner, setOwner] = useState(null);

  const details = () => {
    navigate("/details", { state: fundraiser });
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
        fundraiser
      );

      const title = await instance.methods.title().call();
      const url = await instance.methods.url().call();
      const description = await instance.methods.description().call();
      const collected = await instance.methods.collected().call();
      const donations = await instance.methods.getDonations().call();
      const owner = await instance.methods.owner().call();

      setTitle(title);
      setUrl(url);
      setDescription(description);
      setCollected(toWei(collected));
      setDonations(donations.length);
      setOwner(owner);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };
  return (
    <S.Wrapper
      onClick={() => {
        details();
      }}
    >
      <S.Picture src={url} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Details>
          <S.DetailsBlock>{collected} ETH raised</S.DetailsBlock>
          <S.DetailsBlock>{donations} donations</S.DetailsBlock>
        </S.Details>
        <S.Owner>by {shortenAddress(owner)}</S.Owner>
      </S.Content>
    </S.Wrapper>
  );
};

export default Card;
