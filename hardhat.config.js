require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    besuWallet: {
      url: vars.get("LOCK_CONTRACT_TESTPJ_NODE_ENDPOINT"),
      chainId: vars.has("LOCK_CONTRACT_TESTPJ_CHAIN_ID"),
      // test accounts only, all good ;)
      accounts: [
        vars.get("LOCK_CONTRACT_TESTPJ_OWNER_CONTRACT_PK")
      ]
    }
  }
};