import Web3 from "web3";

export const shortenAddress = (address) => {
  // return typeof address;
  if (address) return address.replace(address.substring(6, 34), " ... ");
};

export const toWei = (amount) => {
  return parseFloat(Web3.utils.fromWei(amount, "ether")).toFixed(2);
};
