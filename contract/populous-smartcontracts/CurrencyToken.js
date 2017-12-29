export default {

  transferToContract(web3, contract, currencyTokenAddress, params = {
    toAddress: undefined,
    amount: undefined,
    investorId: undefined,
  }) {
    const preparedParams = {
      ...params,
      investorId: web3.utils.asciiToHex(params.investorId),
    };

    const contractInstance = new web3.eth.Contract(contract.abi, currencyTokenAddress);

    return contractInstance.methods.transferToContract(...Object.values(preparedParams));
  },

  balanceOf(web3, contract, currencyTokenAddress, ownerAddress) {
    const contractInstance = new web3.eth.Contract(contract.abi, currencyTokenAddress);

    return contractInstance.methods.balanceOf(web3.utils.asciiToHex(ownerAddress));
  },

}