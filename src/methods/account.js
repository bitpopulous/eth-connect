export default {
  unlock: (connect, ...accountParams) => {
    let account = [...accountParams];

    // if only address and password is specified
    if (typeof account[0] === 'undefined' || typeof account[1] === 'undefined') {
      return Promise.reject(new Error('Ensure account address & password are specified.'));
    }

    // if time is specified
    if (typeof account[2] !== 'number') {
      account = account.slice(0, 2);
      account.push(0);
    }

    return connect.eth.personal.unlockAccount(account[0], account[1], account[2]);
  },

  lock: (connect, ...accountParams) => {
    let account = [...accountParams];

    // if only address and password is specified
    if (typeof account[0] === 'undefined' || typeof account[1] === 'undefined') {
      return Promise.reject(new Error('Ensure account address & password are specified.'));
    }

    // if time is specified
    if (typeof account[2] !== 'number') {
      account = account.slice(0, 2);
      account.push(0);
    }

    return connect.eth.personal.lockAccount(account[0], account[1], account[2]);
  },
};
