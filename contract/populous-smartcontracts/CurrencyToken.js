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

    return contractInstance.methods.transferToContract(...Object.values(preparedParams)).send({from});
  },

  balanceOf(connect,
            contract,
            from,
            ownerAddress) {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

    return contractInstance.methods.balanceOf(ownerAddress).call({from});
  },

}