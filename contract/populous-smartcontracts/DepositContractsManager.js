export default {

  create: (connect, contract, from, clientId) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId)
    }

    return contractInstance.methods
      .create(...Object.values(params))
      .send({
        from: from
      });
  },

  deposit: (connect, contract, from, clientId, tokenContract, receiveCurrency, depositAmount, receiveAmount) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    //anything that takes bytes or bytes1-32, is converted to buff.
    const params = {
      clientId: connect.utils.asciiToHex(clientId),
      tokenContract: connect.utils.asciiToHex(tokenContract),
      receiveCurrency: connect.utils.asciiToHex(receiveCurrency),
      depositAmount,
      receiveAmount
    }

    return contractInstance.methods
      .deposit(...Object.values(params))
      .send({
        from: from
      });
  },

  releaseDeposit: (connect, contract, from, clientId, tokenContract, receiveCurrency, receiver, depositIndex) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId),
      tokenContract: connect.utils.asciiToHex(tokenContract),
      receiveCurrency: connect.utils.asciiToHex(receiveCurrency),
      receiver: connect.utils.asciiToHex(receiver),
      depositIndex
    }

    return contractInstance.methods
      .releaseDeposit(...Object.values(params))
      .send({
        from: from
      });
  },

  getDepositAddress: (connect, contract, from, clientId) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId)
    }

    return contractInstance.methods
      .getDepositAddress(...Object.values(params))
      .call({
        from: from
      });
  },

  getActiveDepositList: (connect, contract, from, clientId, tokenContract, receiveCurrency) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId),
      tokenContract: connect.utils.asciiToHex(tokenContract),
      receiveCurrency: connect.utils.asciiToHex(receiveCurrency)
    }

    return contractInstance.methods
      .getActiveDepositList(...Object.values(params))
      .call({
        from: from
      });
  },

  getActiveDeposit: (connect, contract, from, clientId, tokenContract, receiveCurrency, depositIndex) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId),
      tokenContract: connect.utils.asciiToHex(tokenContract),
      receiveCurrency: connect.utils.asciiToHex(receiveCurrency),
      depositIndex
    }

    return contractInstance.methods
      .getActiveDeposit(...Object.values(params))
      .call({
        from: from
      });
  }
};