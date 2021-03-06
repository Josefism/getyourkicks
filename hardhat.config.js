require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan")
require('dotenv').config();

const { ALCHEMY_URL, PRIVATE_KEY, PROD_PRIVATE_KEY, POLYGONSCAN_API } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/m67bVRYeJh51AcmvQDk5YYS4WZTdoreO",
      accounts: [PRIVATE_KEY]
    },
    matic: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/r42HYQxhUz3yHODYsXmoOiiFZfWfHUSW",
      accounts: [PROD_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API
  }
};
