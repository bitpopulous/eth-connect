module.exports = {
    unlock: (connect, ...account) => {
        return new Promise((resolve, reject) => {

            //if only address and password is specified
            if (typeof account[0] === 'undefined' || typeof account[1] === 'undefined') {
                reject(new Error('Ensure account address & password are specified.'))
            }

            //if time is specified
            if (typeof account[2] !== 'number') {
                account = account.slice(0, 2);
                account.push(0);
            }

            connect.eth.personal.unlockAccount(account[0], account[1], account[2]).then((result) => {
                resolve(result);
            }).catch((exception) => {
                reject(exception)
            })

        })
    },

    lock: (connect, ...account) => {
        return new Promise((resolve, reject) => {

            //if only address and password is specified
            if (typeof account[0] === 'undefined' || typeof account[1] === 'undefined') {
                reject(new Error('Ensure account address & password are specified.'))
            }

            //if time is specified
            if (typeof account[2] !== 'number') {
                account = account.slice(0, 2);
                account.push(0);
            }

            connect.eth.personal.lockAccount(account[0], account[1], account[2]).then((result) => {
                resolve(result);
            }).catch((exception) => {
                reject(exception)
            })

        })
    }
}