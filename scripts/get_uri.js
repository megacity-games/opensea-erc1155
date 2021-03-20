const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require('web3');
const MNEMONIC = process.env.MNEMONIC;
const INFURA_KEY = process.env.INFURA_KEY;
const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS;
const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
const NETWORK = process.env.NETWORK;
const _ = require('lodash');

const abi = require('../build/contracts/MegacityItem').abi;

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
  console.error('Please set a mnemonic, infura key, owner, network, and contract address.');
  process.exit(0);
}

async function main() {
  const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`);
  const web3Instance = new web3(
    provider
  );

  if (NFT_CONTRACT_ADDRESS) {
    console.log(NFT_CONTRACT_ADDRESS);
    const hexValue = web3.utils.randomHex(0);
    console.log(hexValue);
    const nftContract = new web3Instance.eth.Contract(abi, NFT_CONTRACT_ADDRESS, { gasLimit: "10000000" });
    const result = await nftContract.methods.uri(9).call({ from: OWNER_ADDRESS });
    console.log(result);
    process.exit(0);
  }
}

main();
