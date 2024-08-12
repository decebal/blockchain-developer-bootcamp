require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const privateKeys = process.env.PRIVATE_KEYS || ""

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    localhost: {},
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: privateKeys.split(',')
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY
    }
  }

};
