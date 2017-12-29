import { getValueFromTX } from '../../helpers/index';

/**
 * PopulousEthComm.createDepositAddress
 * This method creates a new deposit address for a given ethId
 * @param   {string}  ethId - An ethId for a user
 * @returns {Promise}       - Promise containing either the deposit
 *                            address or an error
 */
export default function createDepositAddress(ethId) {
  const getAddress = getValueFromTX.bind(
    null,
    'EventNewDepositContract',
    'depositContractAddress'
  );

  // Convert the ethId string to hex
  const ethIdHex = this.web3.utils.toHex(ethId);

  return new Promise((resolve, reject) => {
    this.callContractMethod('Populous', 'createDepositContract', ethIdHex)
      .then(getAddress)
      .then(resolve)
      .catch(reject);
  });
}
