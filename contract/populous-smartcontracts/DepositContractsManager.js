import {
  method
} from '../../methods/index';

module.exports = {

  create: (connect, contract, from, clientId) => {
    return new Promise((resolve, reject) => {

      const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

      const params = {
        clientId: Buffer.from(clientId, 'ascii')
      }

      contractInstance.methods
        .create('0x' + params.clientId.toString('hex'))
        .send({
          from: from
        })
        .then(function (receipt) {
          resolve(receipt);
        })
        .catch(error => {
          reject(new Error(error));
        });
    });
  },

  deposit: (connect, contract, from, clientId, tokenContract, receiveCurrency, depositAmount, receiveAmount) => {
    new Promise((resolve, reject) => {
      const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

      //anything that takes bytes or bytes1-32, is converted to buff.
      const params = {
        clientId: Buffer.from(currency, 'ascii'),
        tokenContract: Buffer.from(from, 'ascii'),
        receiveCurrency: Buffer.from(to, 'ascii'),
        depositAmount: depositAmount,
        receiveAmount: receiveAmount
      }

      contractInstance.methods
        .deposit(
          '0x' + params.clientId.toString('hex'),
          '0x' + params.tokenContract.toString('hex'),
          '0x' + params.receiveCurrency.toString('hex'),
          params.depositAmount,
          params.receiveAmount
        )
        .send({
          from: from
        })
        .then(function (receipt) {
          resolve(receipt);
        })
        .catch(error => {
          reject(new Error(error));
        });
    });
  },

  releaseDeposit: (connect, contract, from, clientId, tokenContract, receiveCurrency, receiver, depositIndex) => {
    return new Promise((resolve, reject) => {

      const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

      const params = {
        clientId: Buffer.from(clientId, 'ascii'),
        tokenContract: Buffer.from(tokenContract, 'ascii'),
        receiveCurrency: Buffer.from(receiveCurrency, 'ascii'),
        receiver: Buffer.from(receiver, 'ascii'),
        depositIndex: depositIndex
      }

      contractInstance.methods
        .releaseDeposit(
          '0x' + params.clientId.toString('hex'),
          '0x' + params.tokenContract.toString('hex'),
          '0x' + params.receiveCurrency.toString('hex'),
          '0x' + params.receiver.toString('hex'),
          params.depositIndex
        )
        .send({
          from: from
        })
        .then(function (receipt) {
          resolve(receipt);
        })
        .catch(error => {
          reject(new Error(error));
        });
    })
  },

  getDepositAddress: (connect, contract, from, clientId) => {
    return new Promise((resolve, reject) => {

      const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

      const params = {
        clientId: Buffer.from(clientId, 'ascii')
      }

      contractInstance.methods
        .getDepositAddress(
          '0x' + params.clientId.toString('hex')
        )
        .call({
          from: from
        },
        function(error, result) {
          if (!error)
            resolve(result);
          else
            reject(new Error(error));
        });
    });
  },

  getActiveDepositList: (connect, contract, from, clientId, tokenContract, receiveCurrency) => {
    return new Promise((resolve, reject) => {

      const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

      const params = {
        clientId: Buffer.from(clientId, 'ascii'),
        tokenContract: Buffer.from(tokenContract, 'ascii'),
        receiveCurrency: Buffer.from(receiveCurrency, 'ascii')
      }

      contractInstance.methods
        .getActiveDepositList(
          '0x' + params.clientId.toString('hex'),
          '0x' + params.tokenContract.toString('hex'),
          '0x' + params.receiveCurrency.toString('hex')
        )
        .call({
          from: from
        },
        function(error, result) {
          if (!error)
            resolve(result);
          else
            reject(new Error(error));
        });
    });
  },

  getActiveDeposit: (connect, contract, from, clientId, tokenContract, receiveCurrency, depositIndex) => {
    return new Promise((resolve, reject) => {

      const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

      const params = {
        clientId: Buffer.from(clientId, 'ascii'),
        tokenContract: Buffer.from(tokenContract, 'ascii'),
        receiveCurrency: Buffer.from(receiveCurrency, 'ascii'),
        depositIndex: depositIndex
      }

      contractInstance.methods
        .getActiveDeposit(
          '0x' + params.clientId.toString('hex'),
          '0x' + params.tokenContract.toString('hex'),
          '0x' + params.receiveCurrency.toString('hex'),
          params.depositIndex
        )
        .call({
          from: from
        },
        function(error, result) {
          if (!error)
            resolve(result);
          else
            reject(new Error(error));
        });
    });
  }

}