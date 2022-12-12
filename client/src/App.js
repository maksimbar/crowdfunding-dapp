import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import NewFundraiser from "./views/Form";
import FactoryContract from "./contracts/Crowdfunding.json";
import Home from "./views/Home";
import getWeb3 from "./utils/getWeb3";
import "./App.css";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import { sharedPreferences } from "./utils/theme";
import Details from "./views/Details";
import { ToastContainer } from "react-toastify";

const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  /* padding: 100px 10px 0 10px; */
  max-width: ${sharedPreferences.pageWidth};
  margin: auto;
`;

const App = () => {
  const [accounts, setAccounts] = useState(null);
  const [state, setState] = useState({
    web3: null,
    accounts: null,
    contract: null,
  });
  const [storageValue, setStorageValue] = useState(0);

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = FactoryContract.networks[networkId];
        const instance = new web3.eth.Contract(
          FactoryContract.abi,
          deployedNetwork && deployedNetwork.address
        );
        setState({ web3, accounts, contract: instance });
        setAccounts(accounts);
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract.
              Check console for details.`
        );
        console.error(error);
      }
    };
    init();
  }, []);

  const runExample = async () => {
    const { accounts, contract } = state;
  };

  // console.log(runExample());

  return (
    <Backdrop>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/new" element={<NewFundraiser />} />
        <Route path="*" element={<Home to="/home" replace />} />
      </Routes>
      <ToastContainer />
    </Backdrop>
  );
};
export default App;
