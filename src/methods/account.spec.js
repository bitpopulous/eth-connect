import { expect } from 'chai';
import account from './account';
import { connect } from './connect';
import { network } from '../config';

var settings = {
  web3: connect(network.ropsten)
}
describe('The unlock account method', () => {
  it('successfully unlocks the account', done => {
    account.unlock(settings.web3, '0xbdc82ccac9fd5d90c5b8a87d1b3c22a88b3411bd', 'password9', 400)
      .then(result => {
        expect(result).to.be.true;
        done();
      })
      .catch(e => e)
      .finally(e => expect(e).to.be.undefined);
  });

  it('returns an error when unlocking fails', done => {
    try {
      account.unlock(settings.web3, 'fail', 'password91', 400)
        .catch(e => {
          expect(e.message).to.be.a('string');
          done();
        });
    } catch (error) {
      expect(error.message).to.be.a('string');
      done();
    }
  });
});

describe('The lock account method', () => {
  it('successfully locks the account', done => {
    account.lock(settings.web3, '0xbdc82ccac9fd5d90c5b8a87d1b3c22a88b3411bd', 'password9', 400)
      .then(result => {
        expect(result).to.be.true;
        done();
      })
      .catch(e => e)
      .finally(e => expect(e).to.be.undefined);
  });

  it('returns an error when locking fails', done => {
    try {
      account.lock(settings.web3, 'fail', 'password9', 400)
        .catch(e => {
          expect(e.message).to.be.a('string');
          done();
        });
    } catch (error) {
      expect(error.message).to.be.a('string');
      done();
    }
  });
});