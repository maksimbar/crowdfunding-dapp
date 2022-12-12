import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles.jsx";
import { shortenAddress } from "../../utils/index.js";
import { toWei } from "../../utils/index.js";
import CrowdfundingContract from "../../contracts/Crowdfunding.json";
import Web3 from "web3";
import { toDays } from "../../utils/index.js";

const Card = ({ fundraiser }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const navigate = useNavigate();

  const details = () => {
    navigate("/details", { state: fundraiser });
  };

  const dateInSecs = Math.floor(new Date().getTime() / 1000);
  console.log(dateInSecs);

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
        deployedNetwork.address
      );

      const timeLeft = await instance.methods
        .timeUntilExpiration(fundraiser.id, dateInSecs)
        .call();

      setTimeLeft(toDays(timeLeft));
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
      <S.Picture src={fundraiser.image} />
      <S.Content>
        <S.Title>{fundraiser.title}</S.Title>
        <S.Description>{fundraiser.description}</S.Description>
        <S.Details>
          <S.DetailsBlock>
            {toWei(fundraiser.collected)} ETH raised
          </S.DetailsBlock>
          <S.DetailsBlock>
            {fundraiser.donations.length} donations
          </S.DetailsBlock>
        </S.Details>
        <S.Owner>by {shortenAddress(fundraiser.owner)}</S.Owner>
      </S.Content>
    </S.Wrapper>
  );
};

export default Card;
