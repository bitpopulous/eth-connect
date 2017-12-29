import { expect } from 'chai';
import * as Populous from './Populous';
import {connect} from '../../methods/connect';
import { network, contract } from '../../config';

var settings = {
  web3: connect(network.ropsten)
}

describe('getLedgerEntry function', () => {
  it('success', done => {
    Populous.default.getLedgerEntry(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35','GBP', 'Populous')
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => e)
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('getCurrency function', () => {
  it('success', done => {
    Populous.default.getCurrency(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35','GBP')
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => e)
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('getCurrencySymbol function', () => {
  it('success', done => {
    Populous.default.getCurrency(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35','GBP')
      .then(result => {
        Populous.default.getCurrencySymbol(settings.web3, contract.populous, '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35',result)
          .then(result => {
            expect(result).to.exist;
            done();
          })
          .catch(e => e)
          .finally(e => expect(e).to.be.undefined);
      })
  });
});