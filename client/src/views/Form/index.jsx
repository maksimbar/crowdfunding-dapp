import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import detectEthereumProvider from "@metamask/detect-provider";
import PoolContract from "../../contracts/Pool.json";
import Web3 from "web3";
import FormField from "../../components/FormField";
import * as S from "./styles.jsx";
import Loader from "../../components/Loader";
import notify from "../../utils/Toast";

const NewFundraiser = () => {
  const navigate = useNavigate();

  const [web3, setWeb3] = useState(null);
  const [instance, setInstance] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    endDate: "",
    url: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const provider = await detectEthereumProvider();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = PoolContract.networks[networkId];
      const instance = new web3.eth.Contract(
        PoolContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      // instance.options.address = "0x8469c193d25d2eF6039444cADFaCF9B34bCCaFA6";

      setWeb3(web3);
      setInstance(instance);
      setAccounts(accounts);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  function daysToSeconds(days) {
    return Math.round(days * 24 * 60 * 60);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await instance.methods
        .createCampaign(
          accounts[0],
          form.title,
          form.description,
          web3.utils.toWei(form.target, "ether"),
          daysToSeconds(form.endDate),
          form.url
        )
        .send({ from: accounts[0] });

      navigate("/home");
      notify("Compaign created successfully");
    } catch (error) {
      notify("Transaction rejected");
    }
    setIsLoading(false);
  };
  return (
    <S.Wrapper>
      {isLoading && <Loader />}
      <S.Form onSubmit={handleSubmit}>
        <S.Title>New Fundraiser</S.Title>
        <S.Container>
          <S.InputGroup>
            <FormField
              labelName="Campaign title *"
              id="outlined-bare"
              placeholder="Fundraiser title"
              value={form.title}
              handleChange={(e) => handleFormFieldChange("title", e)}
            />
            <FormField
              labelName="Goal *"
              placeholder="0.50"
              inputType="number"
              value={form.target}
              handleChange={(e) => handleFormFieldChange("target", e)}
            />
          </S.InputGroup>
          <FormField
            labelName="Campaign description *"
            id="outlined-bare"
            placeholder="Fundraiser description"
            value={form.description}
            isTextArea={true}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />
          <S.InputGroup>
            <FormField
              labelName="Days until completion*"
              placeholder="Days until completion"
              inputType="number"
              value={form.endDate}
              handleChange={(e) => handleFormFieldChange("endDate", e)}
            />
            <FormField
              labelName="Campaign image *"
              placeholder="Image URL of your campaign"
              inputType="url"
              value={form.image}
              handleChange={(e) => handleFormFieldChange("url", e)}
            />
          </S.InputGroup>
        </S.Container>
        <S.FormButton>Continue</S.FormButton>
      </S.Form>
    </S.Wrapper>
  );
};
export default NewFundraiser;
