export default {

  checkNoBids: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
    return contract.transaction.gasLimit(connect).then(limit => {
      return contractInstance.methods
        .checkNoBids()
        .send({
          from: from,
          gas: limit
        });
    })
  },

  checkDeadline: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contract.transaction.gasLimit(connect).then(limit => {
      return contractInstance.methods
        .checkDeadline()
        .send({
          from: from,
          gas: limit
        });
    });
  },

  borrowerChooseWinner: (connect, contract, from, groupIndex) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      groupIndex: groupIndex
    };

    return contract.transaction.gasLimit(connect).then(limit => {
      return contractInstance.methods
        .borrowerChooseWinner(...Object.values(params))
        .send({
          from: from,
          gas: limit
        });
    });
  },

  getStatus: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .getStatus()
      .call({
        from: from
      });
  },

  getGroupsCount: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .getGroupsCount()
      .call({
        from: from
      });
  },

  getGroup: (connect, contract, from, groupIndex) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      groupIndex: groupIndex
    };

    return contractInstance.methods
      .getGroup(...Object.values(params))
      .call({
        from: from
      });
  },

  getPaidAmount: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .getPaidAmount()
      .call({
        from: from
      });
  },

  getWinnerGroupIndex: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .getWinnerGroupIndex()
      .call({
        from: from
      });
  }

};