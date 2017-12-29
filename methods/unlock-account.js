/**
 * EthComm.unlockAccount method
 * Attempts to unlock the default account
 * @returns {Promise} Promise containing either nothing or an Error
 */
export default function unlockAccount() {
  return this.web3.eth.personal.unlockAccount(
    this.localAddress,
    this.localAddressPassword
  );
}
