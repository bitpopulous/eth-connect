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
    address: '0x0f5318c4412f18b4ca77765706430e6781654005',
    pptAddress: '0xa41cb127aff0b67ef19fa5da55ced7a0be8982e3',
    transaction: methods.transaction,
  },
  depositContractsManager: {
    abi: getABI('DepositContractsManager'),
    address: '0x79e74b1862d4a8ecb11e7659b1b9f23d78547642',
    transaction: methods.transaction,
  },
  crowdSale: {
    abi: getABI('Crowdsale'),
    transaction: methods.transaction,
  },
  crowdsaleManager: {
    abi: getABI('CrowdsaleManager'),
    address: '0x3f5de306e76f97b8372b54f02ea34c51f30444ee',
    transaction: methods.transaction,
  },
  currencyToken: {
    abi: getABI('CurrencyToken'),
    transaction: methods.transaction,
  },
  populousToken: {
    abi: getABI('PopulousToken'),
    address: '0xa41cb127aff0b67ef19fa5da55ced7a0be8982e3',
    transaction: methods.transaction,
  },
};
