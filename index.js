import {
    account,
    connect,
    event,
    method
} from './methods';
import {
    network,
    contract
} from './config';

import {
    populous,
    depositContractsManager
} from './contract/populous-smartcontracts'



var settings = {
    web3: connect(network.ropsten)
}


// populous.transfer(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35', to, currency, amount).then(result => {
//     console.log(result);
// })

populous.getLedgerEntry(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35', 'GBP', 'Populous').then(result => {
    console.log(result);
})

// populous.mintTokens(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35', 'GBP', 400).then(result => {
//     console.log(result);
// })