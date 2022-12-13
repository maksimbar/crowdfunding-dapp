import React, { useState, useEffect } from "react";
import CrowdfundingContract from "../../contracts/Pool.json";
import Web3 from "web3";
import Card from "../../components/Card";
import * as S from "./styles.jsx";
import Loader from "../../components/Loader";
import { sleep } from "../../utils";

const Home = () => {
  const [funds, setFunds] = useState([]);
  const [totalCampaigns, setTotalCampaigns] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      setIsLoading(true);

      await sleep(700);
      const web3 = new Web3("http://localhost:7545");

      const networkId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();
      const deployedNetwork = CrowdfundingContract.networks[networkId];
      const instance = new web3.eth.Contract(
        CrowdfundingContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      const funds = await instance.methods.getCampaigns().call();
      const totalCampaigns = await instance.methods.campaignsCount().call();

      setContract(instance);
      setAccounts(accounts);
      setTotalCampaigns(totalCampaigns);
      setFunds(funds);
      setIsLoading(false);
    } catch (error) {
      console.log(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };
  return (
    <>
      <S.Title>Fundraisers ({totalCampaigns})</S.Title>
      {/* {totalCompaigns < 0 ? ( */}
      <S.CardBox>
        {isLoading && <Loader />}
        {[...funds].reverse().map((item, key) => (
          <Card key={key} fundraiser={item} />
        ))}
      </S.CardBox>
      {/* ) : ( "Nothing here yet, feel free to start a new fundraising campaign!"
      )} */}
    </>
  );
};

export default Home;
