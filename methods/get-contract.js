/**
 * EthComm.getContract method
 * Retrieves a contract from the cache or blockchain
 * @param {string} contractName - The textual name of the type
 *                                of contract
 * @param {string} [address] - Deposit contract instance address
 * @returns {Promise} Promise containing either an instance of the
 *                    contract or an Error
 */
export default function getContract(contractName, address) {
  return new Promise((resolve, reject) => {
    let contractAtAddress;

    // Check arguments
    if (!contractName || typeof contractName !== 'string') {
      reject(new Error('Please pass the contract name as a string'));
    }

    // address might be passed as a bool or something
    // as a result of currying, so we check the type but dont
    // throw an error if it's not a string
    if (address && typeof address === 'string') {

      // If an address is given we create a key for it
      contractAtAddress = contractName + address;
    }

    // Check to see if the contract is in the cache
    // If contractAtAddress is set, then look for it
    const instance = this.contractsCache[contractAtAddress || contractName];

    if (instance) {
      return resolve(instance);
    }

    // No instance cached, so we need to fetch it from the network

    // Get the contract instance
    this.processABI(contractName, address)
      .then(contract => {

        // Cache the instance of the contract
        this.contractsCache[contractAtAddress || contractName] = contract;

        // Resolve the promise containing the contract instance
        resolve(contract);
      }).catch(reject);
  });
}
