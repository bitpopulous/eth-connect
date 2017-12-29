/**
 * EthComm.subscribeToEvents method
 */
export default function subscribeToEvents(contractName, eventName) {
  return new Promise((resolve, reject) => {
    this.getContract(contractName)
      .then(contract => {

        // Connect to either one event or all
        const events = eventName ?
          contract.events[eventName] :
          contract.events.allEvents;

        events()
          .on('data', resolve)
          .on('error', reject);
      })
      .catch(reject);
  });
}
