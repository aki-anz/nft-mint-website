require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "",
      accounts: [""],
    },
  },
  etherscan: {
    apiKey: "",
  },
};