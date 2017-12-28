import {
    method
} from '../../methods/index';

module.exports = {


    //Example, when dealing with constant methods or 'view' methods which only get data
    //returns crowdsale
    getCurrency: (connect, contract, from, currency) => {
        return new Promise((resolve, reject) => {

            const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

            const params = {
                currency: Buffer.from(currency, 'ascii')
            }

            contractInstance.methods.getCurrency('0x' + params.currency.toString('hex')).call({
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

    transfer: (connect, contract, from, to, currency, amount) => {
        new Promise((resolve, reject) => {


            const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

            //anything that takes bytes or bytes1-32, is converted to buff.
            const params = {
                currency: Buffer.from(currency, 'ascii'),
                from: Buffer.from(from, 'ascii'),
                to: Buffer.from(to, 'ascii'),
                amount: amount
            }

            contractInstance.methods.transfer(
                    '0x' + params.currency.toString('hex'),
                    '0x' + params.from.toString('hex'),
                    '0x' + params.to.toString('hex'),
                    params.amount
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
    getLedgerEntry: (connect, contract, from, currency, accountId) => {
        return new Promise((resolve, reject) => {

            const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

            const params = {
                currency: Buffer.from(currency, 'ascii'),
                accountId: Buffer.from(accountId, 'ascii')
            }

            contractInstance.methods.getLedgerEntry(
                '0x' + params.currency.toString('hex'),
                '0x' + params.accountId.toString('hex')).call({
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
    mintTokens: (connect, contract, from, currency, amount) => {
        return new Promise((resolve, reject) => {

            const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

            const params = {
                currency: Buffer.from(currency, 'ascii'),
                amount: amount
            }

            contractInstance.methods.mintTokens(
                '0x' + params.currency.toString('hex'),
                params.amount).send({
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