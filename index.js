import {
    account,
    connect,
    event,
    method
} from './src/methods';
import {
    network,
    contract
} from './src/config';

import {
    populous
} from './src/contract/populous-smartcontracts'



var settings = {
    web3: connect(network.ropsten)
}
