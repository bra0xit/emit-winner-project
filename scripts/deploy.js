require("dotenv").config();
const hre = require("hardhat");


async function main() {
  const _WINNER_CONTRACT_ADDRESS = process.env.WINNER_CONTRACT_ADDRESS;

  // hardhat-ethers, creats a ethers object which is smart enough to get the 
  // bytecode and ABI of the contract WHEN we compile it - awesome!!!
  const contract = await hre.ethers.deployContract("IntermediaryContract", [_WINNER_CONTRACT_ADDRESS]); //gives us ABI and bytecode

  (await contract).waitForDeployment();

  // Lesson: Things in the space changes quickly - newest hardhat variables and function calls were different to the Alchemy guide!
  // --> ALWAYS use the latest and greatest package version - and use the boilerplater from new project with this package 
  // --> avoid these mistakes

  console.log(
    `Deployed to ${contract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
