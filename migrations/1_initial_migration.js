require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});

const Migrations = artifacts.require("Migrations");

module.exports = function(deployer, network, accounts) {
  console.log(`Using network: ${network}`);
  console.log(`Using accounts`, accounts);
  deployer.deploy(Migrations);
};
