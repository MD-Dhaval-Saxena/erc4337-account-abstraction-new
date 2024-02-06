
const hre = require("hardhat");
const ethers = hre.ethers;
const SMART_ACCOUNT = "0x856e4424f806D16E8CBC702B3c0F2ede5468eae5";

async function main() {
  const smartAccount = await ethers.getContractAt("Account", SMART_ACCOUNT);
  console.log("smartAccount is at: ", smartAccount.target);
  console.log("smartAccount counter: ", Number(await smartAccount.count()));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
