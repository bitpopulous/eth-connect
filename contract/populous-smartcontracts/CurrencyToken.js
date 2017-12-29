export default {

  transferToContract(connect, contract, currencyTokenAddress, params = {
    toAddress: undefined,
    amount: undefined,
    investorId: undefined,
  }) {
    const preparedParams = {
      ...params,
      investorId: connect.utils.asciiToHex(params.investorId),
    };

    const contractInstance = new connect.eth.Contract(contract.abi, currencyTokenAddress);

    return contractInstance.methods.transferToContract(...Object.values(preparedParams));
  },

  balanceOf(connect, contract, currencyTokenAddress, ownerAddress) {
    const contractInstance = new connect.eth.Contract(contract.abi, currencyTokenAddress);

    return contractInstance.methods.balanceOf(ownerAddress);
  },

}