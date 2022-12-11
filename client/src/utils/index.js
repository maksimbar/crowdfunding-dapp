export const shortenAddress = (address) => {
  // return typeof address;
  if (address) return address.replace(address.substring(6, 34), " ... ");
};
