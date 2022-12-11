import React, { useEffect, useState } from "react";
import * as S from "./styles.jsx";
import metamasklogo from "../../metamask-logo.png";
import Web3 from "web3";

const Account = () => {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:9545");
      const accounts = await web3.eth.getAccounts();
      setAddress(accounts[0]);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  const shortenAddress = (address) => {
    // return typeof address;
    if (address) return address.replace(address.substring(6, 34), " ... ");
  };
  return (
    <S.Wrapper>
      <S.Logo src={metamasklogo} />
      {/* {address} */}
      <S.Address>{shortenAddress(address)}</S.Address>
    </S.Wrapper>
  );
};

export default Account;
