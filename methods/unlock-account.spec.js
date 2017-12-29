import { expect } from 'chai';

import EthComm from '../EthConnect';

describe('The unlock account method', () => {
  it('successfully unlocks the default account', done => {
    new EthComm().unlockAccount()
      .then(() => done())
      .catch(e => e)
      .finally(e => expect(e).to.be.undefined);
  });

  it('returns an error when unlocking fails', done => {
    new EthComm({ localAddressPassword: '0000' })
      .unlockAccount()
      .catch(e => {
        expect(e.message).to.be.a('string');
        done();
      });
  });
});
