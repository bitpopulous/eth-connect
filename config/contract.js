import fs from 'fs';
import path from 'path';




const _contractDir = "../../populous-smartcontracts/build/contracts";


const getABI = (name) => {
  const abiPath = path.join(__dirname, _contractDir, name + '.json');

  const contractJSON = JSON.parse(fs.readFileSync(abiPath, 'utf8'));
  const contractABI = contractJSON.abi;

  return contractABI;
}

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
  }
}