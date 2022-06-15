// contracts/MintableToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
  
  event Mint(address indexed to, uint256 amount);
  
  bool public mintingFinished = false;
    
  constructor(string memory _name, string memory _symbol, address _owner) ERC20(_name, _symbol) {}
 
  function mint(address _to, uint256 _amount) external onlyOwner returns (bool) {
    _mint(_to, _amount * 10 ** decimals());
    Mint(_to, _amount);
    return true;
  }
 
  function toggleMinting() external onlyOwner returns (bool) {
    mintingFinished = !mintingFinished;
    return true;
  }
}
