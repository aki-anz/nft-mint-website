# NFT Mint Website

This website is built with React, Chakra UI, Solidity, Ethers, Hardhat and deployed to [github pages](https://aki-anz.github.io/nft-mint-website/).

## Front-end Development

The front end is developed with React library. The website is divided into App, Navbar and Mint components. JSX and useState hook are utilised, alongside Chakra UI, which helps to provide inline styling to the app.

The app is designed to have a navigation bar to help users to click on social media links and to connect to their MetaMask Wallet.

Only after user connect to their MetaMask Wallet, the website will refresh and render the Mint component.

Then, the user can press '+' or '-' button to adject the amount of NFTs they want to mint. The minimum and maximum of NFT to mint is 1 and 10 respectively. 

Finally, the user can select 'Mint' button and MetaMask will show a prompt to confirm transaction. Once the user confirms, the transaction will be recorded in the blockchain (in our case, I have deployed the contract to Ethereum Goerli testnet) and can be viewed in Etherscan Goerli network.

​
## Blockchain Development

### Smart Contract

Solidity is used to write the smart contract (Mint a NFT) of our app. OpenZeppelin's ERC721 boilerplate contract is imported to help develop the contract.

In the constructor function of the contract, the mint price of each NFT and the maximum supply are set. The initial supply of NFT is 0 and the maximum supply is 10000.

The _safeMint function from the openzeppelin library is called in the mint function of the contract. 

### Deploy Smart Contract

Hardhat is used to deploy and verify the contract on the Goerli testnet.

The contract address is [link](https://goerli.etherscan.io/address/0x325643D885bAA59f99143Ff47891CE9554E6E791).

It has been verified on Etherscan. 

Users can see the original [deployment transaction](https://goerli.etherscan.io/tx/0x25981dec4278fec6d00c79452cf581c89256ab88fcdb6868c8544ec93e513787) and a test [mint transaction](https://goerli.etherscan.io/tx/0xebe70cdb7ab02dd9a2d6655191de511a2b63a84023fc6cfed73fb14884474e66).

### Back-end Calls to Smart Contract

Ethers library is used to make api calls to the Ethereum Goerli network. When user clicks mint, ethers will parse the mint amount from the React front end and then make API call to the Goerli network to complete a transaction.
