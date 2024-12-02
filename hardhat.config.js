require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    // in built test network to use when developing contracts
    // hardhat: {
    //     chainId: 1337
    // },
    besuWallet: {
      url: "http://172.18.0.1:8545",
      chainId: 23354,
      // test accounts only, all good ;)
      accounts: [
        vars.get("LOCK_CONTRACT_TESTPJ_OWNER_CONTRACT_PK")
      ]
    }
  }
};