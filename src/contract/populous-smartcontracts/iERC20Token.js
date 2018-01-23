export default {

  approve(connect, contract, from, spenderAddress, amount) {
    const preparedParams = {
      spenderAddress,
      amount,
    };

    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contract.transaction.gasLimit(connect)
      .then(gas =>
        contractInstance.methods
          .approve(...Object.values(preparedParams))
          .send({
            from,
            gas,
          })
        );
  },

  transferFrom(connect, contract, from, fromAddress, toAddress, amount) {
    const preparedParams = {
      fromAddress,
      toAddress,
      amount,
    };

    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contract.transaction.gasLimit(connect)
        .then(gas =>
            contractInstance.methods
                .transferFrom(...Object.values(preparedParams))
                .send({
                  from,
                  gas,
                })
        );
  },

  transfer(connect, contract, from, toAddress, amount) {
    const preparedParams = {
      toAddress,
      amount,
    };

    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contract.transaction.gasLimit(connect)
        .then(gas =>
            contractInstance.methods
                .transfer(...Object.values(preparedParams))
                .send({
                  from,
                  gas,
                })
        );
  },

  balanceOf(connect, contract, from, ownerAddress) {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods.balanceOf(ownerAddress)
        .call({
          from,
        })
      .then((result) => {
        if (typeof result === 'object') {
          throw new Error('Failed transaction');
        }

        return Number.parseFloat(result);
      });
  },

  allowance(connect, contract, from, ownerAddress, spenderAddress) {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods.allowance(ownerAddress, spenderAddress)
        .call({
          from,
        })
        .then((result) => {
          if (typeof result === 'object') {
            throw new Error('Failed transaction');
          }

          return Number.parseFloat(result);
        });
  },

};
