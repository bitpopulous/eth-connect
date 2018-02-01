export default {

  getDepositAddress: (connect, contract, from, clientId) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId),
    };

    return contractInstance.methods
      .getDepositAddress(...Object.values(params))
      .call({
        from: from,
      });
  },

  getActiveDepositList: (connect, contract, from, clientId, tokenContract, receiveCurrency) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId),
      tokenContract: tokenContract,
      receiveCurrency: connect.utils.asciiToHex(receiveCurrency),
    };

    return contractInstance.methods
      .getActiveDepositList(...Object.values(params))
      .call({
        from: from,
      });
  },

  getActiveDeposit: (connect, contract, from, clientId, tokenContract, receiveCurrency, depositIndex) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      clientId: connect.utils.asciiToHex(clientId),
      tokenContract: tokenContract,
      receiveCurrency: connect.utils.asciiToHex(receiveCurrency),
      depositIndex: depositIndex,
    };

    return contractInstance.methods
      .getActiveDeposit(...Object.values(params))
      .call({
        from: from,
      });
  },
  deposit: (connect, contract, from, populousContractAddress, clientId, tokenContract, receiveCurrency, depositAmount, receiveAmount) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
    const params = {
      populousContractAddress,
      clientId: connect.utils.asciiToHex(clientId),
      tokenContract: tokenContract,
      receiveCurrency: connect.utils.asciiToHex(receiveCurrency),
      depositAmount: depositAmount,
      receiveAmount: receiveAmount,
    };
    return contract.transaction.gasLimit(connect).then(gas =>
      contractInstance.methods.deposit(...Object.values(params)).send({
        from: from,
        gas: gas,
      }));
  },

  create: (connect, contract, from, clientId) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
    const params = {
      clientId: connect.utils.asciiToHex(clientId),
    };

    return contract.transaction.gasLimit(connect).then(gas =>
      contractInstance.methods.create(...Object.values(params)).send({
        from: from,
        gas: gas,
      }));
  },

  releaseDeposit: (connect, contract, from, populousContractAddress, clientId, tokenContract, releaseCurrency, receiver, depositIndex) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
    const params = {
      populousContractAddress,
      clientId: connect.utils.asciiToHex(clientId),
      tokenContract: tokenContract,
      releaseCurrency: connect.utils.asciiToHex(releaseCurrency),
      receiver: receiver,
      depositIndex: depositIndex,
    };
    return contract.transaction.gasLimit(connect).then(gas =>
      contractInstance.methods.releaseDeposit(...Object.values(params)).send({
        from: from,
        gas: gas,
      }));
  },
};
