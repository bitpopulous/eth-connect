import fs from 'fs';
import path from 'path';
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
      address: contractAddress
    }
  },
  populous: {
    abi: getABI('Populous'),
    address: "0xefbf878eb12a79f11e8d3076ef4c228aa3e0a08d"
  },
  depositContractsManager: {
    abi: getABI('DepositContractsManager'),
    address: "0xefbf878eb12a79f11e8d3076ef4c228aa3e0a08d"
  },
  currencyToken:{
    abi: getABI('CurrencyToken'),
    address: "0xefbf878eb12a79f11e8d3076ef4c228aa3e0a08d"
  },
};
