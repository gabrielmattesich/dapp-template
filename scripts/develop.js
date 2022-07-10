const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account: ' + deployer.address);

  // Deploy BallotBasic
    const CrudExample = await ethers.getContractFactory('CrudExample');
    const crudExample = await CrudExample.deploy();

  console.log( "CrudExample: " + crudExample.address ); 

}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})