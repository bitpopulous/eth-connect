/**
 * PopulousEthComm.getValueFromContractAtAddress
 * This method finds a contract instance at a given address, and calls
 * a get method on that contract instance to retrieve some value
 * @param   {string}  contractName - The name of the contract to get
 * @param   {string}  methodName   - The name of the method to call
 * @param   {string}  address      - The address of the contract instance
 * @param   {...*}    args         - Any number of arguments to pass to
 *                                   the method
 * @returns {Promise}              - Promise containing the value or an error
 */
export default function getValueFromContract(contractName, methodName, address, ...args) {
  const callMethod = this.getConstant.bind(this, methodName, [...args]);

  return new Promise((resolve, reject) => {
    this.getContract(contractName, address)
      .then(callMethod)
      .then(resolve)
      .catch(reject);
  });
}
