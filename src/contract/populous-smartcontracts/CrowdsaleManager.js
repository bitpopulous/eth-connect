import constants from '../constants';

export default {
  createCrowdsale: (connect, contract, from, populousContractAddress,
                    currencySymbol, borrowerId, invoiceId, invoiceNumber, invoiceAmount,
                    fundingGoal, platformTaxPercent, signedDocumentIPFSHash, extraTime) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
    const params = {
      populousContractAddress,
      currencySymbol: connect.utils.toHex(currencySymbol),
      borrowerId: connect.utils.toHex(borrowerId),
      invoiceId: connect.utils.toHex(invoiceId),
      invoiceNumber: invoiceNumber,
      invoiceAmount: invoiceAmount,
      fundingGoal: fundingGoal,
      platformTaxPercent: platformTaxPercent,
      signedDocumentIPFSHash: signedDocumentIPFSHash,
      extraTime: extraTime,
    };

    return contract.transaction.gasLimit(connect)
      .then(gas =>
        contractInstance.methods.createCrowdsale(...Object.values(params))
          .send({
            from: from,
            gas: gas,
          }))
      .then((result) => {
        if (result.status === constants.statusMap.fail) {
          throw new Error('Failed transaction');
        }

        return result.events.EventNewCrowdsale.returnValues.crowdsale;
      });
  },
};
