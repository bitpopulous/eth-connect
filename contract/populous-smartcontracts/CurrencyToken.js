export default {

  transferToContract(connect,
                     contract,
                     from,
                     toAddress,
                     amount,
                     investorId,) {
    const preparedParams = {
      toAddress,
      amount,
      investorId: connect.utils.asciiToHex(investorId),
    };

    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contract.transaction.gasLimit(connect)
      .then(limit =>
        contractInstance.methods.transferToContract(...Object.values(preparedParams))
          .send({from, gas: limit,})
      );
  },

  balanceOf(connect,
            contract,
            from,
            ownerAddress) {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods.balanceOf(ownerAddress).call({from})
      .then((result) => {
        if (typeof result === 'object') {
          throw new Error('Failed transaction');
        }

        return Number.parseFloat(result);
      });
  },

}