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
    populous
} from './contract/populous-smartcontracts'



var settings = {
    web3: connect(network.ropsten)
}


/// Example: connect

//web3: connect(network.ropsten)




//Example 0

//step 1, connect to network. takes network
// account.lock(settings.web3,'0xbdc82ccac9fd5d90c5b8a87d1b3c22a88b3411bd','password9', 400).then((result) =>{

//     console.log(result);
// });



/// Example 1

// event.subscribe(settings.web3, contract.populous, 'EventNewCurrency', (callback) =>{

//     console.log(1, callback)

// });



/// Example 2

// var a = event.subscribeAll(settings.web3, contract.populous, (callback) =>{

//     console.log(2, callback)

// });



/// Example 3

// populous.getCurrency(connect(network.ropsten), contract.populous, '0xbdc82ccac9fd5d90c5b8a87d1b3c22a88b3411bd', 'GBP').then(result => {
//     console.log(result);
// })