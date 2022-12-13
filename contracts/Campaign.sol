// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Campaign {

        address payable public owner;
        string public title;
        string public description;
        uint256 public target;
        uint public endDate;
        uint256 public collected;
        string public url;
        address[] public backers;
        uint256[] public donations;
        bool public isCompleted = false;

    constructor (address payable _owner, string memory _title, string memory _description, uint256 _target, uint _endDate, string memory _url) public {
        owner = _owner;
        title = _title;
        description = _description;
        target = _target;
        endDate = block.timestamp + _endDate;
        collected = 0;
        url = _url;
    }

    function getDonations () public view returns (uint256[] memory) {    
        return donations;
    }

    function getBackers () public view returns (address[] memory) {    
        return backers;
    }

    function claimTimeout() public {
        isCompleted = true;
    }

    function donateToCampaign() public payable {
        uint256 amount = msg.value;

        backers.push(msg.sender);
        donations.push(amount);

        owner.transfer(amount);

        collected += amount;
    }
}