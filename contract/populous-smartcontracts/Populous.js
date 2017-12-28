import {
    method
} from '../../methods';

module.exports = {
    //returns crowdsale
    getCurrency: (connect, contract, from, currency) => {
        return new Promise((resolve, reject) => {

            var contractInstance = new connect.eth.Contract(contract.abi, contract.address);

            const buf = Buffer.from(currency, 'ascii');

            contractInstance.methods.getCurrency('0x' + buf.toString('hex')).call({
                from: from
            }, function (error, result) {
                if (!error)
                    resolve(result)

            });

        })
    }
}