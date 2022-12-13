// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Campaign.sol";

contract Pool {
    Campaign[] private _campaigns;

    function campaignsCount () public view returns (uint256) {
        return _campaigns.length;
    }

    function createCampaign (address payable owner, string memory title, string memory description, uint256 target, uint endDate, string memory url) public {
        Campaign campaign = new Campaign (owner, title, description, target, endDate, url);
        _campaigns.push(campaign);
    }

    function getCampaigns () public view returns (Campaign[] memory allCampaigns) {    
        uint256 size = campaignsCount() ;
        allCampaigns = new Campaign[](size);

        for (uint256 i = 0; i < size; i++) {
            allCampaigns[i] = _campaigns[i];
        }

        return allCampaigns;    
    }

}