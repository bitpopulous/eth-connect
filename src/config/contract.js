import methods from '../methods/index';
import contractsConfigs from './contractsConfigs';

const getABI = (name) => {
  if (!contractsConfigs[name]) {
    throw new Error('Unknown contract name');
  }

  return contractsConfigs[name].abi;
};

export default {
  _build: (contractName, contractAddress) => ({
    abi: getABI(contractName),
    address: contractAddress,
    transaction: Object.assign({}, methods.transaction),
  }),
  populous: {
    abi: getABI('Populous'),
    address: '0x4ebd658ce5831deedcabe1384c5caea270765467',
    pptAddress: '0x4512299e0ff5e343d1a7f38b294997a2cc6e8e6b',
    transaction: methods.transaction,
  },
  depositContractsManager: {
    abi: getABI('DepositContractsManager'),
    address: '0xa0ae44c1adb7e09844d481a1d11f1b73e70b7817',
    transaction: methods.transaction,
  },
  crowdSale: {
    abi: getABI('Crowdsale'),
    transaction: methods.transaction,
  },
  currencyToken: {
    abi: getABI('CurrencyToken'),
    address: '0xefbf878eb12a79f11e8d3076ef4c228aa3e0a08d',
    transaction: methods.transaction,
  },
  populousToken: {
    abi: getABI('PopulousToken'),
    address: '0x4512299e0ff5e343d1a7f38b294997a2cc6e8e6b',
    transaction: methods.transaction,
  },
};
