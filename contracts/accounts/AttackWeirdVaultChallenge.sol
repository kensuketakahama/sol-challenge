pragma solidity 0.7.6;

import "./WeirdVaultChallenge.sol";

contract AttackWeirdVaultChallenge is WeirdVaultChallenge {
    function changeIsSolved() external {
        isSolved = true;
    }
}