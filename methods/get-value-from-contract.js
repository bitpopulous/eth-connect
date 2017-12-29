/**
 * PopulousEthComm.getValueFromContract
 * This method finds a named contract, and calls a get method on that
 * contract instance to retrieve some value
 * @param   {string}  contractName - The name of the contract to get
 * @param   {string}  methodName   - The name of the method to call
 * @param   {...*}    args         - Any number of arguments to pass to
 *                                   the method
 * @returns {Promise}              - Promise containing the value or an error
 */
export default function getValueFromContract(contractName, methodName, ...args) {
  const callMethod = this.getConstant.bind(this, methodName, [...args]);

  return new Promise((resolve, reject) => {
    this.getContract(contractName)
      .then(callMethod)
      .then(resolve)
      .catch(reject);
  });
}
