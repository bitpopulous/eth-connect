import {expect} from 'chai';

import EthConnect from '../EthConnect';

describe('The lock account method', () => {

  const ethConnect = new EthConnect();

  it('successfully locks the account', done => {
    ethConnect.lockAccount(ethConnect.localAddress)
      .then(result => {
        expect(result).to.be.true;
        done();
      })
      .catch(done)
      .finally(e => expect(e).to.be.undefined);
  });

  it('returns an error when locking fails', done => {
    ethConnect.lockAccount('fail')
      .then((error, result) => {
        if (error) {
          return done();
        }

        done(new Error('Not expect successful'));
      });
  });
});
