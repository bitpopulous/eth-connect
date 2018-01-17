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
    address: '0x4405013ae8a2e736946b38a99fe0f43edfdd9e6b',
    pptAddress: '0x0afe42f71b574c41f9df3ee129e2001ceb0f373f',
    transaction: methods.transaction,
  },
  depositContractsManager: {
    abi: getABI('DepositContractsManager'),
    address: '0x9c833917ee5f1c7f93c2764206f7f209dc8c5102',
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
    address: '0x0afe42f71b574c41f9df3ee129e2001ceb0f373f',
    transaction: methods.transaction,
  },
};
