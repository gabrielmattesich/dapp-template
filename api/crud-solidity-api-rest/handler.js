'use strict';


const Contract = require('web3-eth-contract');
const { v4: uuidv4 } = require('uuid');


const LOCAL_CONNECTION = 'http://127.0.0.1:8545/';
const ADRRES_CONTRACT = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const ADDRES_ACCOUNT = '0xdD2FD4581271e230360230F9337D5c0430Bf44C0'
let jsonInterface = require('../../../../../artifacts/contracts/CrudExample.sol/CrudExample.json').abi;


module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


const getContractInformation  = () => {
  Contract.setProvider(LOCAL_CONNECTION);
  var contract = new Contract(jsonInterface, ADRRES_CONTRACT);
  console.log(contract);
}
const registerTask= (data) => {
  Contract.setProvider(LOCAL_CONNECTION);
  const contract = new Contract(jsonInterface, ADRRES_CONTRACT);
  contract.methods.createTask('asdasd', 'asdasd', 'asdasd', 'asdasd', 'asdasd').send({from: ADDRES_ACCOUNT, gas: 3000000})
  this.modals.modal2 = false
}