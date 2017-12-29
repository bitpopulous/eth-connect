import {
    method
} from '../../methods/index';

module.exports = {


    //Example, when dealing with constant methods or 'view' methods which only get data
    //returns crowdsale
    getCurrency: (web3, contract, from, currency) => {
        return new Promise((resolve, reject) => {
            const contractInstance = new web3.eth.Contract(contract.abi, contract.address);

            contractInstance.methods.getCurrency(web3.utils.asciiToHex(currency)).call({
                from: from
            }, function (error, result) {
                if (!error)
                    resolve(result)
                else {
                    reject(new Error(error))
                }

            });

        })
    },

    transfer: (web3, contract, from, to, currency, amount) => {
        return new Promise((resolve, reject) => {
            const contractInstance = new web3.eth.Contract(contract.abi, contract.address);

            contractInstance.methods.transfer(
              web3.utils.asciiToHex(currency),
              web3.utils.asciiToHex(from),
              web3.utils.asciiToHex(to),
              amount
                ).send({
                    from: from
                })
                .then(function (receipt) {
                    resolve(receipt);
                    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
                })
                .catch(Error => {
                    reject(new Error(Error));
                })
        })

    },
    getLedgerEntry: (web3, contract, from, currency, accountId) => {
        return new Promise((resolve, reject) => {
            const contractInstance = new web3.eth.Contract(contract.abi, contract.address);

            contractInstance.methods.getLedgerEntry(
              web3.utils.asciiToHex(currency),
              web3.utils.asciiToHex(accountId)).call({
                from: from
            }, function (error, result) {
                if (!error)
                    resolve(result)
                else {
                    reject(new Error(error))
                }

            });

        })
    },
    mintTokens: (web3, contract, from, currency, amount) => {
        return new Promise((resolve, reject) => {

            const contractInstance = new web3.eth.Contract(contract.abi, contract.address);


            contractInstance.methods.mintTokens(
                web3.utils.asciiToHex(currency),
                amount).send({
                    from: from
                })
                .then(function (receipt) {
                    resolve(receipt);
                    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
                })
                .catch(Error => {
                    reject(new Error(Error));
                })

        })
    }

}