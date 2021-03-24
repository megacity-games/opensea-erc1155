pragma solidity ^0.5.11;

import "./ERC1155Tradable.sol";

/**
 * @title Megacity
 * Megacity - a contract for semi-fungible tokens used by MEGACITY.
 */
contract Megacity is ERC1155Tradable {
    constructor(address _proxyRegistryAddress)
        public
        ERC1155Tradable("Megacity", "MC", _proxyRegistryAddress)
    {
        _setBaseMetadataURI("https://api-staging.megacity.gg/ethereum/");
    }
}
