/**
 * PopulousEthComm.callContractMethod
 * This method unlocks the local account, finds a named contract,
 * and calls a transaction method on that contract instance.
 * @param   {string}  contractName - The name of the contract to get
 * @param   {string}  methodName   - The name of the method to call
 * @param   {...*}    args         - Any number of arguments to pass to
 *                                   the method
 * @returns {Promise}              - Promise containing the result or an error
 */
export default function callContractMethod(contractName, methodName, ...args) {
  const getNamedContract = this.getContract.bind(this, contractName, null);
  const callMethod = this.makeTransaction.bind(this, methodName, [...args]);

  return new Promise((resolve, reject) => {
    this.unlockAccount()
      .then(getNamedContract)
      .then(callMethod)
      .then(resolve)
      .catch(reject);
  });
}
