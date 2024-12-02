// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract SimpleContractOne {

    constructor() payable {}

    function print() public view returns (string memory) {
        return "Hello World!";
    }
}
