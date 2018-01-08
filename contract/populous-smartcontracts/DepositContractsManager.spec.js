import { expect } from 'chai';
import Populous from './Populous';
import DepositContractsManager from './DepositContractsManager';
import { connect } from '../../methods/connect';
import { network, contract } from '../../config';

let settings = {
    web3: connect(network.ropsten),
    from: '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35',
    receiveCurrency: 'GBP',
    depositAmount: 200,
    receiveAmount: 190,
    INVESTOR1_ACC: 'A'
};

describe('The getDepositAddress method', () => {
  it('successfully gets deposit address', done => {
    DepositContractsManager.getDepositAddress(settings.web3, contract.depositContractsManager, settings.from, settings.INVESTOR1_ACC)
      .then((address) => {
        console.log('deposit address: ', address);
        expect(address).to.be.a('string');
        expect(address).to.have.lengthOf(42);
        done();
      })
      .catch(e => {
        done(e);
      })
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('The getActiveDepositList method', () => {
  it('successfully gets deposit list', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min

    Populous.deposit(settings.web3, contract.depositContractsManager, settings.from, settings.INVESTOR1_ACC, contract.populousToken.address, settings.receiveCurrency, settings.depositAmount, settings.receiveAmount)
      .then((result) => {
        console.log('populous deposit result: ');
        console.log(result);
        return DepositContractsManager.getActiveDepositList(settings.web3, contract.depositContractsManager, settings.from, settings.INVESTOR1_ACC, contract.populousToken.address, settings.receiveCurrency)
      })
      .then((deposit) => {
        console.log('active deposit list: ', deposit);
        expect(deposit[1]).to.equal(settings.depositAmount);
        expect(deposit[2]).to.equal(settings.receiveAmount);
        done();
      })
      .catch(e => {
        done(e);
      })
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('The getActiveDeposit method', () => {
  it('successfully gets active deposit', done => {
    DepositContractsManager.getActiveDeposit(settings.web3, contract.depositContractsManager, settings.from, settings.INVESTOR1_ACC, contract.populousToken.address, settings.receiveCurrency, 0)
      .then((deposit) => {
        console.log('active deposit: ', deposit);
        expect(deposit[0]).to.equal(settings.depositAmount);
        expect(deposit[1]).to.equal(settings.receiveAmount);
        expect(deposit[2]).to.be.false;
        done();
      })
      .catch(e => {
        done(e);
      })
      .finally(e => expect(e).to.be.undefined);
  });
});