export default {

  checkNoBids: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
    return contract.transaction.gasLimit(connect).then(gas =>
      contractInstance.methods
        .checkNoBids()
        .send({
          from,
          gas,
        })
    );
  },

  checkDeadline: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contract.transaction.gasLimit(connect).then(gas =>
      contractInstance.methods
        .checkDeadline()
        .send({
          from,
          gas,
        })
    );
  },

  borrowerChooseWinner: (connect, contract, from, groupIndex) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      groupIndex,
    };

    return contract.transaction.gasLimit(connect).then(gas =>
      contractInstance.methods
        .borrowerChooseWinner(...Object.values(params))
        .send({
          from,
          gas,
        })
    );
  },

  getStatus: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .getStatus()
      .call({
        from,
      });
  },

  getGroupsCount: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .getGroupsCount()
      .call({
        from,
      });
  },

  getGroup: (connect, contract, from, groupIndex) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    const params = {
      groupIndex,
    };

    return contractInstance.methods
      .getGroup(...Object.values(params))
      .call({
        from,
      });
  },

  getPaidAmount: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .getPaidAmount()
      .call({
        from,
      });
  },

  getWinnerGroupIndex: (connect, contract, from) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods
      .getWinnerGroupIndex()
      .call({
        from,
      });
  },
};
