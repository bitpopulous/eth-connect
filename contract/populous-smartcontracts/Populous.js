import {
  method
} from '../../methods/index';

module.exports = {

  //Example, when dealing with constant methods or 'view' methods which only get data
  //returns crowdsale
  getCurrency: (connect, contract, from, currency) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      currency: connect.utils.asciiToHex(currency),
    };

    return contractInstance.methods
      .getCurrency(...Object.values(params))
      .call({from: from});
  },

  transfer: (connect, contract, from, to, currency, amount) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      currency: connect.utils.asciiToHex(currency),
      from: connect.utils.asciiToHex(from),
      to: connect.utils.asciiToHex(to),
      amount,
    };

    return contractInstance.methods
      .transfer(...Object.values(params))
      .send({from: from});
  },

  getLedgerEntry: (connect, contract, from, currency, accountId) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      currency: connect.utils.asciiToHex(currency),
      accountId: connect.utils.asciiToHex(accountId),
    };

    return contractInstance.methods
      .getLedgerEntry(...Object.values(params))
      .call({from: from});
  },

  mintTokens: (connect, contract, from, currency, amount) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      currency: connect.utils.asciiToHex(currency),
      amount,
    };

    return contractInstance.methods
      .mintTokens(...Object.values(params))
      .send({from: from});
  }
};