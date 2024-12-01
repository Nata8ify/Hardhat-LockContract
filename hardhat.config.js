require("@nomicfoundation/hardhat-toolbox");

// const LOCK_CONTRACT_TESTPJ_NODE_ENDPOINT = vars.get("LOCK_CONTRACT_TESTPJ_NODE_ENDPOINT");
// const LOCK_CONTRACT_TESTPJ_OWNER_CONTRACT_ADDRESS = vars.get("LOCK_CONTRACT_TESTPJ_OWNER_CONTRACT_ADDRESS");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    // in built test network to use when developing contracts
    // hardhat: {
    //     chainId: 1337
    // },
    besuWallet: {
      url: vars.get("LOCK_CONTRACT_TESTPJ_NODE_ENDPOINT"),
      chainId: 1337,
      // test accounts only, all good ;)
      accounts: [
        vars.get("LOCK_CONTRACT_TESTPJ_OWNER_CONTRACT_ADDRESS")
      ]
    }
  }
};