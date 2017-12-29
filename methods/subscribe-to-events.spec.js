import { assert } from 'chai';

import getRandomContractName from '../helpers/get-random-contract-name';
import EthComm from '../EthConnect';

describe('The subscribeToEvents method', function() {
  const ethComm = new EthComm();

  // Note: As I dont know how to mock contract events yet
  // this test only works when you call a contract method
  // while the test is running
  it.skip('should emmit new events', function(done) {
    this.timeout(5 * 60 * 1000); // 5 min

    ethComm.subscribeToEvents('Populous')
      .then(res => {
        done();
      })
      .catch(e => {
        assert.fail(e);
        done();
      });
  });
});
