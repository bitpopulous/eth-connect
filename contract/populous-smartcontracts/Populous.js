import {
  method
} from '../../methods/index';

module.exports = {

  //Example, when dealing with constant methods or 'view' methods which only get data
  //returns crowdsale
  getCurrency: (web3, contract, from, currency) => {
    const contractInstance = new web3.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .getCurrency(web3.utils.asciiToHex(currency))
      .call({from: from});
  },

  transfer: (web3, contract, from, to, currency, amount) => {
    const contractInstance = new web3.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .transfer(
        web3.utils.asciiToHex(currency),
        web3.utils.asciiToHex(from),
        web3.utils.asciiToHex(to),
        amount
      )
      .send({from: from});
  },

  getLedgerEntry: (web3, contract, from, currency, accountId) => {
    const contractInstance = new web3.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .getLedgerEntry(
        web3.utils.asciiToHex(currency),
        web3.utils.asciiToHex(accountId))
      .call({from: from});
  },

  mintTokens: (web3, contract, from, currency, amount) => {
    const contractInstance = new web3.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .mintTokens(
        web3.utils.asciiToHex(currency),
        amount)
      .send({from: from});
  }
};