const hre = require("hardhat");

const INTERMEDIARY_CONTRACT_ADDRESS = process.env.INTERMEDIARY_CONTRACT_ADDRESS;

async function main() {

  const intermedContractInstance = await hre.ethers.getContractAt("IntermediaryContract", INTERMEDIARY_CONTRACT_ADDRESS);
  const addressIntermed = await hre.ethers.getAddress(INTERMEDIARY_CONTRACT_ADDRESS);

  console.log(
    `The addressintermed address is ${addressIntermed}`
  );

  console.log(
    `Deployed address is ${intermedContractInstance.target}`
  );

  console.log(await intermedContractInstance.callExternalFunction());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
