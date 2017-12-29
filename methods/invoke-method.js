/**
 * EthComm.invokeMethod method
 * Invokes a method on a contract instance
 * @param {boolean} getConstant - Whether or not the call is to
 *                                fetch a constant
 * @param {string} methodName - The name of the method to call
 * @param {(array|null)} _params - An array of params to pass to
 *                                 the method or null if no params
 * @param {object} instance - A contract instance
 * @returns {Promise} Promise containing either the result of the method
 *                    call or an Error
 */
function invokeMethod(getConstant = false, methodName, _params, instance) {
  return new Promise((resolve, reject) => {
    let params = _params;

    if (typeof getConstant !== 'boolean') {
      reject(new Error(
        'Please pass a boolean as the first argument'
      ));
    }

    if (!methodName || typeof methodName !== 'string') {
      reject(new Error(
        'Please pass a string as the the second argument'
      ));
    }

    if (params) {
      if (params.constructor !== Array) {
        reject(new Error(
          'Please pass an array of parameters as the third argument'
        ));
      }
    } else {
      params = [];
    }

    if (!instance || typeof instance !== 'object') {
      reject(new Error(
        'Please pass a contract instance as the forth argument'
      ));
    }

    // Setup the method before calling it
    const method = instance.methods[methodName](...params);

    // When getting a constant, we need to use call.
    // Making contracts needs to create a TX:
    // https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#id14
    if (getConstant) {
      method.call()
        .then(resolve)
        .catch(reject);
    } else {

      // Add the TX params if we're just calling a TX method
      // that costs Ether to deploy
      const txOptions = {
        from: this.localAddress,
        gas: this.gas.transaction,
      };

      method.send(txOptions)
        .then(resolve)
        .catch(reject);
    }
  });
}

export default invokeMethod;
