export default {
  subscribe: (connect, contract, eventName, callback) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
    const event = contractInstance.events[eventName];

    event().on('data', (result) => {
      const args = [];
      let foundTokenName = false;
      Object.keys(result.returnValues).forEach((key) => {
        if (key === 'tokenName' || foundTokenName === true) {
          foundTokenName = true;
        } else {
          args.push(result.returnValues[key]);
        }
      });

      callback({
        args: args,
        raw: result,
      });
    })
      .on('error', (result) => callback(result));
  },

  // subscribe to all events
  subscribeAll: (connect, contract, callback) => {
    const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
    const event = contractInstance.events.allEvents;

    event().on('data', (result) => {
      // args end, after token name is found.
      const args = [];
      let foundTokenName = false;

      Object.keys(result.returnValues).forEach((key) => {
        if (key === 'tokenName' || foundTokenName === true) {
          foundTokenName = true;
        } else {
          args.push(result.returnValues[key]);
        }
      });

      callback({
        args: args,
        raw: result,
      });
    })
      .on('error', (result) => callback(result));
  },
};
