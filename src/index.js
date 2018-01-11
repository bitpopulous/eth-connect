import methods from './methods/index';
import config from './config/index';

import smartContracts from './contract/populous-smartcontracts/index'

console.log(smartContracts.populous.getCurrency());
export default {
    methods: {
        account: methods.account,
        connect: methods.connect,
        event: methods.event
    },
    config: {
        network: config.network,
        contract: config.contract
    },
    contracts: {
      ...smartContracts,
    }
}