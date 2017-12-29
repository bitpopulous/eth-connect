export default {

  transferToContract(connect,
                     contract,
                     currencyTokenAddress,
                     from,
                     toAddress,
                     amount,
                     investorId,) {
    const preparedParams = {
      toAddress,
      amount,
      investorId: connect.utils.asciiToHex(investorId),
    };

    const contractInstance = new connect.eth.Contract(contract.abi, currencyTokenAddress);

    return contractInstance.methods.transferToContract(...Object.values(preparedParams)).send({from});
  },

  balanceOf(connect,
            contract,
            currencyTokenAddress,
            from,
            ownerAddress) {
    const contractInstance = new connect.eth.Contract(contract.abi, currencyTokenAddress);

    return contractInstance.methods.balanceOf(ownerAddress).call({from});
  },

}