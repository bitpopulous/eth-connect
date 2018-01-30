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
    address: '0xdfc6d8fe1bdc425731c02ecd84e07fac2394d5ba',
    pptAddress: '0x7b357d44168b50b69186288924a62c7d059af2f9',
    transaction: methods.transaction,
  },
  depositContractsManager: {
    abi: getABI('DepositContractsManager'),
    address: '0x2b91fb4af659a53d27686b0e64e9c09c691da4d4',
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
    address: '0x7b357d44168b50b69186288924a62c7d059af2f9',
    transaction: methods.transaction,
  },
};
