import fs from 'fs';

/**
 * EthComm.processABI method
 * Creates a contract instance from the compiled
 * smart-contracts JSON
 * @param {string} contractName - The name of the contact to get
 * @param {string} [address]    - Optional address to get the contract from
 * @returns {Promise} Promise containing either an instace of the
 *                    contract or Error
 */
export default function processABI(contractName, _address) {
  return new Promise((resolve, reject) => {
    let address = _address;

    // The truffle data comes from the truffle project
    // referenced in the config
    const path = `${this.contractsPath}/${contractName}.json`;

    try {

      // Get the contract ABI and network details
      const { abi, networks } = JSON.parse(fs.readFileSync(path, 'utf8'));

      if (!address) {
        if (!Object.keys(networks).length) {
          return reject(new Error('Local contracts probably not deployed'));
        }

        // Get the deployment address if not passed
        address = networks[Object.keys(networks)[0]].address;
      }

      // Get a contract instance by parsing the contract's ABI
      resolve(new this.web3.eth.Contract(abi, address));
    } catch (e) {
      reject(e);
    }
  });
}
