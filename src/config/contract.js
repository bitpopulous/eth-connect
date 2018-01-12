import fs from 'fs';
import path from 'path';
import methods from '../methods/index';

const contractDir = process.env.ETH_SMART_CONTRACTS_PATH || '../../../populous-smartcontracts/build/contracts';

const getABI = (name) => {
  const abiPath = path.join(__dirname, contractDir, name + '.json');

  const contractJSON = JSON.parse(fs.readFileSync(abiPath, 'utf8'));

  return contractJSON.abi;
};

// TODO: address - should be dynamic

export default {
  _build: (contractName, contractAddress) => ({
    abi: getABI(contractName),
    address: contractAddress,
    transaction: Object.assign({}, methods.transaction),
  }),
  populous: {
    abi: getABI('Populous'),
    address: '0x62b6a8c8272345063985baf892253b11372eb29d',
    pptAddress: '0x4377c67224f1e21a42af82ce3647e6c0c04cba3b',
    transaction: methods.transaction,
  },
  depositContractsManager: {
    abi: getABI('DepositContractsManager'),
    address: '0x45a483909a0956f8246587d42220504372295e25',
    transaction: methods.transaction,
  },
  crowdSale: {
    abi: getABI('Crowdsale'),
    address: '0xdb332aa258dbf4f8fa173c4ebdb21218a9b6b6ef',
    transaction: methods.transaction,
  },
  currencyToken: {
    abi: getABI('CurrencyToken'),
    address: '0xefbf878eb12a79f11e8d3076ef4c228aa3e0a08d',
    transaction: methods.transaction,
  },
  populousToken: {
    abi: getABI('PopulousToken'),
    address: '0x4377c67224f1e21a42af82ce3647e6c0c04cba3b',
    transaction: methods.transaction,
  },
};
