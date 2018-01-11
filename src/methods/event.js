export default {
    subscribe: (connect, contract, eventName, callback) => {

        var contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        var event = contractInstance.events[eventName];

        event().on('data', (result) => {
                var args = [],
                    foundTokenName = false;
                Object.keys(result.returnValues).forEach(function (key) {
                    if (key == 'tokenName' || foundTokenName == true) {
                        foundTokenName = true;
                        return;
                    } else {
                        args.push(result.returnValues[key]);
                    }
                });

                callback({
                    args: args,
                    raw: result
                });
            })
            .on('error', (result) => {
                callback(result);
            })
    },

    //subscribe to all events
    subscribeAll: (connect, contract, callback) => {
        var contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        var event = contractInstance.events.allEvents;

        event().on('data', (result) => {
                //args end, after token name is found.
                var args = [],
                    foundTokenName = false;
                Object.keys(result.returnValues).forEach(function (key) {
                    if (key == 'tokenName' || foundTokenName == true) {
                        foundTokenName = true;
                        return;
                    } else {
                        args.push(result.returnValues[key]);
                    }
                });

                callback({
                    args: args,
                    raw: result
                });
            })
            .on('error', (result) => {
                callback(result);
            })
    }
}