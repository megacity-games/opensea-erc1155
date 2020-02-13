pragma solidity ^0.5.11;

import "./ERC1155Tradable.sol";

/**
 * @title MegacityItem
 * MegacityItem - a contract for semi-fungible tokens used by MEGACITY.
 */
contract MegacityItem is ERC1155Tradable {
    constructor(address _proxyRegistryAddress) ERC1155Tradable(
        "MegacityItem",
        "MEGA",
        _proxyRegistryAddress
    ) public {
        _setBaseMetadataURI("https://api-staging.megacity.gg/exports/");
    }
}
