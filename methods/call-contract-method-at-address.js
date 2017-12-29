/**
 * PopulousEthComm.callContractMethodAtAddress
 * This method unlocks the local account, finds a named contract instace
 * at a given address, then calls a transaction method on that
 * contract instance.
 * @param   {string}  contractName - The name of the contract to get
 * @param   {string}  methodName   - The name of the method to call
 * @param   {string}  address      - The address of the contract instance
 * @param   {...*}    args         - Any number of arguments to pass to
 *                                   the method
 * @returns {Promise}              - Promise containing the result or an error
 */
export default function callContractMethodAtAddress(contractName, methodName, address, ...args) {
  const getContractAtAddress = this.getContract.bind(this, contractName, address);
  const callMethod = this.makeTransaction.bind(this, methodName, [...args]);

  return new Promise((resolve, reject) => {
    this.unlockAccount()
      .then(getContractAtAddress)
      .then(callMethod)
      .then(resolve)
      .catch(reject);
  });
}
