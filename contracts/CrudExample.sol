pragma solidity ^0.8.0;

contract CrudExample {

    constructor() {
    }

    // An struc is a collection of fields, like a type on TS.
    struct Task {
        string id;
        string topic;
        string title;
        string description;
        bool completed;
        string date;
    }

    // This variable save the list of the tasks that we will create.
    Task[] inventoryList;

    // In this function we will create a new task and will the information on an array called inventoryList.
    function createTask(string memory _id, string memory _topic, string memory  _title, string memory  _description, string memory  _date) public {
        Task memory task;
        task.id = _id;
        task.topic = _topic;
        task.title = _title;
        task.description = _description;
        
        task.date = _date;
        inventoryList.push(task);
    }

    // This function will return a specific task from the inventoryList.
    function getTaskByPosition(uint _position) public view returns (Task memory ) {
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