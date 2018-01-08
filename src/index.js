import methods from './methods/index';
import config from './config/index';

import smartContracts from './contract/populous-smartcontracts/index'


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
        populous: smartContracts.populous,
        depositContractsManager: smartContracts.depositContractsManager,
        crowdSale: smartContracts.crowdSale,
        currencyToken: smartContracts.currencyToken
    }
}