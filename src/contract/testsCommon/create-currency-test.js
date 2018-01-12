/* eslint-disable */
import constants from '../constants';
import Populous from '../populous-smartcontracts/Populous';

const createdCurrencies = {};

export function createCurrencyTest(web3connect, populousContract, network, tokenName, decimalUnits, tokenSymbol) {

  if(createdCurrencies[tokenSymbol]){
    return Promise.resolve(createdCurrencies[tokenSymbol])
  }

  return new Promise((resolve, reject) => {
    Populous
      .createCurrency(web3connect, populousContract,
        network.ropsten.ethAddress,
        tokenName, decimalUnits, tokenSymbol)
      .then((currencyCreateResponse) => {
        if (currencyCreateResponse.status === constants.statusMap.fail) {
          Populous
            .getCurrency(web3connect, populousContract,
              network.ropsten.ethAddress, tokenSymbol)
            .then((getCurrencyResult) => {
              if (getCurrencyResult.status === constants.statusMap.fail) {
                reject(new Error('Create and get currency failed'));
              } else {
                createdCurrencies[tokenSymbol] = getCurrencyResult;
                resolve(createdCurrencies[tokenSymbol]);
              }
            })
            .catch(reject);
        } else {
          createdCurrencies[tokenSymbol] = currencyCreateResponse.events.EventNewCurrency.returnValues.addr;
          resolve(createdCurrencies[tokenSymbol]);
        }
      })
      .catch(reject);
  });
}

export default createdCurrencies;