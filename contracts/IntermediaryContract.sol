// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

// This contract needs to be deployed to goerli first - in order to be able to call it from our initialcontract

interface ExternalContractInterface {
    function attempt() external;
}

contract IntermediaryContract {
    ExternalContractInterface externalContract;

    constructor(address _externalContract) {
        externalContract = ExternalContractInterface(_externalContract);
    }

    function callExternalFunction() public {
        externalContract.attempt();
    }
}
