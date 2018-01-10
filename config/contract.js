import fs from 'fs';
import path from 'path';
import {
  transaction
} from './../methods';

// TODO: _contractDir - should be changeable
const _contractDir = "../../populous-smartcontracts/build/contracts";

const getABI = (name) => {
  const abiPath = path.join(__dirname, _contractDir, name + '.json');

  const contractJSON = JSON.parse(fs.readFileSync(abiPath, 'utf8'));
  const contractABI = contractJSON.abi;

  return contractABI;
}

// TODO: address - should be dynamic

module.exports = {
  _build: (contractName, contractAddress) => {
    return {
      abi: getABI(contractName),
      address: contractAddress,
      transaction: Object.assign({}, transaction)
    }
  },
  populous: {
    abi: getABI('Populous'),
    address: "0x62b6a8c8272345063985baf892253b11372eb29d",
    transaction: transaction,
    pptAddress: "0x4377c67224f1e21a42af82ce3647e6c0c04cba3b"
  },
  depositContractsManager: {
    abi: getABI('DepositContractsManager'),
    address: "0x45a483909a0956f8246587d42220504372295e25",
    transaction: transaction,
  },
  crowdSale: {
    abi: getABI('Crowdsale'),
    address: "0xdb332aa258dbf4f8fa173c4ebdb21218a9b6b6ef",
    transaction: transaction,
  },
  currencyToken: {
    abi: getABI('CurrencyToken'),
    address: "0xefbf878eb12a79f11e8d3076ef4c228aa3e0a08d",
    transaction: transaction,
  },
  populousToken: {
    abi: getABI('PopulousToken'),
    address: '0x4377c67224f1e21a42af82ce3647e6c0c04cba3b',
    transaction: transaction,
  }
};