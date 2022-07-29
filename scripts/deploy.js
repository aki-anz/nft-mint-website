const hre = require("hardhat");

async function main() {
    const CyberpunkNFT = await hre.ethers.getContractFactory("CyberpunkNFT");
    const cyberpunkNFT = await CyberpunkNFT.deploy();

    await cyberpunkNFT.deployed();

    console.log("CyberpunkNFT deployed to: ", cyberpunkNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });