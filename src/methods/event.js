function subscribeToEvent(event, callback) {
  event().on('data', (result) => {
    callback({
      args: Object.values(result.returnValues),
      raw: result,
    });
  })
    .on('error', (result) => callback(result));
}

export default {
  subscribe: (connect, contract, eventName, callback) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
    const event = contractInstance.events[eventName];

    subscribeToEvent(event, callback);
  },

  // subscribe to all events
  subscribeAll: (connect, contract, callback) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
    const event = contractInstance.events.allEvents;

    subscribeToEvent(event, callback);
  },
};
