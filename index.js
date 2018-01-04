import {
    account,
    connect,
    event,
    method,
    transaction
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



var settings = {
    web3: connect(network.ropsten)
}

// event.subscribe(settings.web3, contract.populous, 'EventNewCurrency', (e) => {
//     console.log('Event: ', e);
// })

// populous.transfer(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35', 'Populous', 'Wisdom', 'CCC', 500).then(result => {
//     console.log('result: ', result);
//     populous.getLedgerEntry(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35', 'CCC', 'Wisdom').then(result => {
//         console.log('Wisdom: ', result);
//     });
// })
// console.log(transaction.stimatedGas())
// populous.createCurrency(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35', 'zzz Dollars', 8, 'zzz').then(result => {
//     console.log('create currency: ', result);
// });
// account.unlock(settings.web3, )
populous.createCurrency(settings.web3, contract.populous(transaction), '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35', 'CCCzs Token', 8, 'CCsCz').then(result => {
    console.log('Wisdom: ', result);
});


// populous.destroyTokens(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35','CCC', 400).then(result => {
//     console.log(result);
// });


// populous.createCurrency(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35', 'CCC Dollars', 8, 'CCC');/*.then(result => {
//    // console.log('create currency: ',result);
// });*/


// populous.getCurrency(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35','CCC').then(result => {
//     console.log('get currency: ',result);
// });


// const contractInfo = contract._build('Populous', '0xdb332aa258dbf4f8fa173c4ebdb21218a9b6b6ef');
// var instance = new settings.web3.eth.Contract(contractInfo.abi, contractInfo.address);
// const params = { 
//     currency: settings.web3.utils.asciiToHex('GBP') 
// };

// instance.methods.getCurrency(settings.web3.utils.asciiToHex('GBP'), '0xdb332aa258dbf4f8fa173c4ebdb21218a9b6b6ef').call({ from: from }).then(r => {
//     console.log(r);
// })