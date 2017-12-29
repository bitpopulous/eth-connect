/* global process */
import { assert } from 'chai';

import PopulousEthComm from '../../index';

describe('The createDepositAddress method', function() {
  const ethComm = new PopulousEthComm();

  describe('when creating a new deposit address', function() {
    it('should return a new deposit address when passes a valid ethId', function(done) {
      this.timeout(15 * 60 * 1000); // 15 min

      ethComm.api.populous.createDepositAddress('9a2f911604ccd6266c02cc41378c4011')
        .then(address => {
          assert.isString(address);
          assert.lengthOf(address, 42);
          done();
        })
        .catch(e => {
          done(e);
        });
    });
  });
});
