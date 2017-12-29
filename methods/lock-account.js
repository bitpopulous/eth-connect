/**
 * EthComm.unlockAccount method
 * Attempts to unlock the default account
 * @returns {Promise} Promise containing either nothing or an Error
 */
export default function lockAccount() {
  return this.web3.eth.personal.lockAccount(
    this.localAddress
  );
}
