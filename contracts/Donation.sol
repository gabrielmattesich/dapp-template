pragma solidity ^0.8.0;

contract Argendona {

    constructor() {
    }

    // A donation is a collaboration between a donor and a recipient.
    struct Donation {
        string id;
        string title;
        string description;
        uint128 amount;
    }

    // In this function we will create a new task and will the information on an array called inventoryList.
    function createDonation(Donation _donation) public payable {
        donations.push(_donation);
    }

    // This function will return a specific task from the inventoryList.
    function getDonations() public view returns (Donation memory ) {
        return inventoryList[_position];
    }

    // This function will return the list of the tasks.   
    function getTask() public view returns (Task[] memory ) {
        return inventoryList;
    }

    // This function will return the information of a specific task updated.
    function changeTaskStatus(uint _position) public {
        inventoryList[_position].completed = true;
    }

}