require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/c62f1b87f56e47e5aaa3074b879f435c",
      accounts: ["46be53401878c963693117b443871504117fa8ea894a178bb6dc5ffc290154eb"],
    },
  },
  etherscan: {
    apiKey: "9IN8NXRN7QF5UFP1QEAUMV562PNB3IHVHJ",
  },
};