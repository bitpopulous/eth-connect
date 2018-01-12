import methods from './methods/index';
import { network, contract } from './config/index';

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
    currencyToken: smartContracts.currencyToken,
  },
};
