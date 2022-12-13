import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NewFundraiser from "./views/Form";
import Home from "./views/Home";
import Details from "./views/Details";
import getWeb3 from "./utils/getWeb3";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import { sharedPreferences } from "./utils/theme";
import { ToastContainer } from "react-toastify";

const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  max-width: ${sharedPreferences.pageWidth};
  margin: auto;
`;

const App = () => {
  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
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
