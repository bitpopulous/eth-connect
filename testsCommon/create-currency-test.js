/* eslint-disable */

 const createdCurrencies = {};

export function createCurrencyTest(ethInstance, params = {
  tokenName: undefined,
  decimalUnits: undefined,
  tokenSymbol: undefined,
}) {

  return new Promise((resolve, reject) => {
    ethInstance.api.populous.createCurrency(params)
      .then(address => {
        createdCurrencies[params.tokenSymbol] = address;
        resolve(address);
      })
      .catch(e => {
        if (e.message === 'Error creating transation, please try again') {
          ethInstance.api.populous.getCurrency(params.tokenSymbol)
            .then((currencyAddress) => {
              createdCurrencies[params.tokenSymbol] = currencyAddress;
              resolve(currencyAddress);
            })
            .catch(reject);
        } else {
          reject(e);
        }
      });
  });
}

export default createdCurrencies;