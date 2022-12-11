import React, { useEffect, useState } from "react";
import * as S from "./styles.jsx";
import metamasklogo from "../../metamask-logo.png";
import Web3 from "web3";
import { shortenAddress } from "../../utils/index.js";

const Navbar = ({ account }) => {
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

  return (
    <S.Nav>
      <S.Ul>
        <S.NavItem>
          <S.Link to="/home">
            <S.Icon className="fa-solid fa-border-all fa-xl" />
          </S.Link>
        </S.NavItem>
        <S.NavItem>
          <S.Link to="/new">
            <S.Icon className="fa-solid fa-plus fa-xl" />
          </S.Link>
        </S.NavItem>
        <S.NavItem>
          <S.Link to="quit">
            <S.Icon className="fa-solid fa-right-from-bracket fa-xl" />
          </S.Link>
        </S.NavItem>
      </S.Ul>
      <S.Container>
        <S.Logo src={metamasklogo} />
        {/* {address} */}
        <S.Address>{shortenAddress(address)}</S.Address>
      </S.Container>
    </S.Nav>
  );
};

export default Navbar;
