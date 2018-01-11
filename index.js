import {
    account,
    connect,
    event
} from './methods';
import {
    network,
    contract
} from './config';

import {
    populous,
    depositContractsManager,
    crowdSale,
    currencyToken
} from './contract/populous-smartcontracts'


export default {
    methods: {
        account: account,
        connect: connect,
        event: event
    },
    config: {
        network: network,
        contract: contract
    },
    contracts: {
        populous: populous,
        depositContractsManager: depositContractsManager,
        crowdSale: crowdSale,
        currencyToken: currencyToken
    }
}