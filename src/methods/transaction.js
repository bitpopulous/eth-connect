export default {
  gasLimit: (// connect
  ) => Promise.resolve(3000000),
  difficulty: (connect) =>
    new Promise((resolve, reject) =>
      connect.eth.getBlock('latest')
        .then(block => {
          const result = block.difficulty;
          resolve(result);
        })
        .catch(e => {
          reject(new Error(e));
        })
    ),
};
