import Web3 from "web3";

export const shortenAddress = (address) => {
  if (address) return address.replace(address.substring(6, 34), " ... ");
};

export const toWei = (amount) => {
  return parseFloat(Web3.utils.fromWei(amount, "ether")).toFixed(2);
};

export const toDays = (seconds) => {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " day " : " days ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes") : "";
  return dDisplay || hDisplay || mDisplay;
};

export const sleep = (m) => new Promise((r) => setTimeout(r, m));
