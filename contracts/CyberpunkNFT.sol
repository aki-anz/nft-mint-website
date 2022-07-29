// SPDX-License-Identifier: UNLICENSE

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CyberpunkNFT is ERC721 {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;

    constructor() payable ERC721('Cyberpunk', 'CP') {
        mintPrice = 0.0001 ether;
        totalSupply = 0;
        maxSupply = 10000;
    }

    function mint(uint256 _quantity) public payable {
        require(msg.value == _quantity * mintPrice, 'Mint value is incorrect');
        require(totalSupply + _quantity <= maxSupply, 'NFTs sold out');

        for (uint256 i = 0; i < _quantity; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}