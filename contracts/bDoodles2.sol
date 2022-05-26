//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./bDoodles.sol";

contract bDoodles2 is bDoodles {
    function test() public pure returns (string memory) {
        return "Upgraded";
    }
}
