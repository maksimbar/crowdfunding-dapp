import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import detectEthereumProvider from "@metamask/detect-provider";
import CrowdfundingContract from "../../contracts/Crowdfunding.json";
import Web3 from "web3";
import FormField from "../../components/FormField";
import * as S from "./styles.jsx";

const NewFundraiser = () => {
  const navigate = useNavigate();

  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [funds, setFunds] = useState();
  const [accounts, setAccounts] = useState(null);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
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
      console.log(accounts);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/home");
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
      .createCampaign(
        accounts[0],
        form.title,
        form.description,
        form.target,
        form.deadline,
        form.image
      )
      .send({ from: accounts[0], gas: "1000000" });
    // funds = await instance.methods.show().call();
    // setFunds(funds);
    // console.log(funds);
    console.log("Successfully created fundraiser");
  };
  console.log(form);
  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Container>
          <S.InputGroup>
            <FormField
              labelName="Campaign title*"
              id="outlined-bare"
              placeholder="Fundraiser Title"
              value={form.title}
              handleChange={(e) => handleFormFieldChange("title", e)}
            />
            <FormField
              labelName="Goal *"
              placeholder="ETH 0.50"
              inputType="number"
              value={form.target}
              handleChange={(e) => handleFormFieldChange("target", e)}
            />
          </S.InputGroup>
          <FormField
            labelName="Campaign description*"
            id="outlined-bare"
            placeholder="Fundraiser Description"
            value={form.description}
            isTextArea={true}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />
          <S.InputGroup>
            <FormField
              labelName="Days "
              placeholder="End Date"
              inputType="number"
              value={form.deadline}
              handleChange={(e) => handleFormFieldChange("deadline", e)}
            />
            <FormField
              labelName="Campaign image *"
              placeholder="Place image URL of your campaign"
              inputType="url"
              value={form.image}
              handleChange={(e) => handleFormFieldChange("image", e)}
            />
          </S.InputGroup>
        </S.Container>
        <S.FormButton>Continue</S.FormButton>
      </S.Form>
    </S.Wrapper>
  );
};
export default NewFundraiser;
