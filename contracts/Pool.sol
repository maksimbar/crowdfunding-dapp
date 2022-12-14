// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

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

    function getAllCampaigns () public view returns (Campaign[] memory allCampaigns) {    
        allCampaigns = new Campaign[](_campaigns.length);

        for (uint256 i = 0; i < _campaigns.length; i++) {
            allCampaigns[i] = _campaigns[i];
        }

        return allCampaigns;    
    }
}