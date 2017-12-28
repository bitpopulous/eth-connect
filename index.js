import {
    account,
    connect,
    event,
    method,
    processAbi
} from './methods';
import {
    network,
    contract
} from './config';

import {
    populous
} from './contract/populous-smartcontracts'



var settings = {
    web3: connect(network.ropsten)
}

