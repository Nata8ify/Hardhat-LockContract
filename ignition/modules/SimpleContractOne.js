// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SimpleContractOneModule", (m) => {
  const simpleContractOne = m.contract("SimpleContractOne", [], {});
  m.call(simpleContractOne, "print", []);
  return { simpleContractOne };
});
