export default {
    faucet(connect,
                        contract,
                        from,
                        amount,) {
        const preparedParams = {
        amount,
        };

        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        return contract.transaction.gasLimit(connect)
        .then(limit =>
        contractInstance.methods.faucet(...Object.values(preparedParams))
        .send({from, gas: limit,})
        );
    },
    
    transferToAddress(connect,
                       contract,
                       from,
                       depositAddress,
                       faucetAmount,) {
      const preparedParams = {
        depositAddress,
        faucetAmount,
      };
  
      const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
  
      return contract.transaction.gasLimit(connect)
        .then(limit =>
          contractInstance.methods.transferToAddress(...Object.values(preparedParams))
            .send({from, gas: limit,})
        );
    },
  
    balanceOf(connect,
              contract,
              from,
              ownerAddress) {
      const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
  
      return contractInstance.methods.balanceOf(ownerAddress).call({from})
        .then((result) => {
          if (typeof result === 'object') {
            throw new Error('Failed transaction');
          }
  
          return Number.parseFloat(result);
        });
    },
  
  }