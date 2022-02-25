const Migrations = artifacts.require("Migrations");
const HankyungScam = artifacts.require("HankyungScam.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HankyungScam);
};
