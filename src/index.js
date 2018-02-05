import methods from './methods/index';
import { network, contract } from './config/index';
import constants from './contract/constants';

import smartContracts from './contract/populous-smartcontracts/index';

export default {
  methods: {
    account: methods.account,
    connect: methods.connect,
    event: methods.event,
  },
  config: {
    network: network,
    contract: contract,
  },
  contracts: {
    populous: smartContracts.populous,
    depositContractsManager: smartContracts.depositContractsManager,
    crowdSale: smartContracts.crowdSale,
    crowdsaleManager: smartContracts.crowdsaleManager,
    currencyToken: smartContracts.currencyToken,
    ierc20token: smartContracts.ierc20token,
  },
  constants: constants,
};
