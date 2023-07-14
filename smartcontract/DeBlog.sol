// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.9.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.9.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.9.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.9.2/utils/Counters.sol";

/**
 * @title DeBlog NFT Contract
 * @dev ERC721 contract for DeBlog NFTs
 */
contract DeBlog is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    address payable recipient;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("DeBlog", "DBLOG") {
        recipient = payable(msg.sender);
    }

    /**
     * @dev Returns the base URI for token metadata
     */
    function _baseURI() internal pure override returns (string memory) {
        return "https://firebasestorage.googleapis.com/v0/b/deblog-7c1e4.appspot.com/o/metadata%2F";
    }

    /**
     * @notice Mint a new DeBlog NFT
     * @dev Mints a new NFT and assigns it to the provided address
     * @param to The address to assign the minted NFT to
     * @param uri The token URI for the minted NFT
     */
    function safeMint(address to, string memory uri) public payable {
        (bool success, ) = recipient.call{value:10000000000000000}("");
        require(success, "Minting failed.");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
0xbddbF0Fc68982C307030A0D0053CF398D51d4184