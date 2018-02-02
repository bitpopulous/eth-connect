import { expect, assert } from 'chai';
import Populous from './Populous';
import DepositContractsManager from './DepositContractsManager';
import PopulousToken from './PopulousToken';
import { connect } from '../../methods/connect';
import { network, contract } from '../../config';
import createdCurrencies, { createCurrencyTest } from "../testsCommon/create-currency-test";

let settings = {
  web3: connect(network.ropsten),
  from: '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35',
  clientExternal: '0x93123461712617b2f828494dbf5355b8a76d6051',
  receiveCurrency: 'GBP',
  depositAmount: 200,
  receiveAmount: 150,
  INVESTOR1_ACC: 'A',
  faucetAmount: 200,
};

describe('Deposit Contracts Manager contract', () => {

  let currencyTokenContract;
  const PopulousContract = contract.populous;

  it('should get currency token address', function (done) {
    this.timeout(15 * 60 * 1000); // 15 min

    createCurrencyTest(
      settings.web3, PopulousContract, network,
      'EUR Pokens', 3, settings.receiveCurrency)
      .then(() => {
        currencyTokenContract = contract._build('CurrencyToken', createdCurrencies[settings.receiveCurrency]);
        done();
      })
      .catch(done);
  });

  describe('Deposit Contracts Manager functions', () => {

    it('createDepositContract: should create deposit contract', function (done) {
      this.timeout(15 * 60 * 1000); // 15 min

      DepositContractsManager.create(settings.web3, contract.depositContractsManager, settings.from,
        settings.INVESTOR1_ACC)
        .then(result => {
          expect(result).to.exist;
          done();
        })
        .catch(e => done(e))
        .finally(e => expect(e).to.be.undefined);
    });


    it('deposit function', function (done) {
      this.timeout(15 * 60 * 1000); // 15 min
      assert(createdCurrencies[settings.receiveCurrency], "Currency required.");

      DepositContractsManager.deposit(settings.web3, contract.depositContractsManager, settings.from,
        PopulousContract.address, settings.INVESTOR1_ACC, settings.clientExternal, settings.receiveCurrency, 200, 190)
        .then(result => {
          expect(result).to.exist;
          done();
        })
        .catch(e => done(e))
        .finally(e => expect(e).to.be.undefined);
    });

    it('releaseDeposit function', function (done) {
      this.timeout(15 * 60 * 1000); // 15 min
      assert(createdCurrencies[settings.receiveCurrency], "Currency required.");

      DepositContractsManager.releaseDeposit(settings.web3, contract.depositContractsManager, settings.from,
        PopulousContract.address, settings.INVESTOR1_ACC, settings.clientExternal, settings.receiveCurrency, settings.clientExternal, 0)
        .then(result => {
          expect(result).to.exist;
          done();
        })
        .catch(e => done(e))
        .finally(e => expect(e).to.be.undefined);
    });
  });

  describe('The getActiveDepositList method', () => {
    it('successfully transfers ppt from platform balance to deposit contract address', function (done) {
      this.timeout(15 * 60 * 1000); // 15 min

      DepositContractsManager.getDepositAddress(settings.web3, contract.depositContractsManager, settings.from, settings.INVESTOR1_ACC)
        .then((depositAddress) => {
          console.log('deposit address: ', depositAddress);
          expect(depositAddress).to.be.a('string');
          expect(depositAddress).to.have.lengthOf(42);
          global.depositAddress = depositAddress;
          return PopulousToken.transferToAddress(settings.web3, contract.populousToken, settings.from, depositAddress, settings.depositAmount)
        })
        .then((pptTransfer) => {
          // console.log('PPT transfer: ', pptTransfer);
          expect(pptTransfer).to.exist;
          return PopulousToken.balanceOf(settings.web3, contract.populousToken, settings.from, global.depositAddress)
        })
        .then((depositBalance) => {
          console.log('deposit address ppt balance: ', depositBalance);
          assert.isAtLeast(depositBalance, settings.depositAmount, "Failed getting ppt deposit amount from platform");
          done();
        })
        .catch(e => {
          done(e);
        })
        .finally(e => expect(e).to.be.undefined);
    });
  });


  describe('The getActiveDepositList method', () => {
    it('successfully gets deposit list', function (done) {
      this.timeout(15 * 60 * 1000); // 15 min

      Populous.deposit(settings.web3, contract.populous, settings.from, settings.INVESTOR1_ACC, contract.populousToken.address, settings.receiveCurrency, settings.depositAmount, settings.receiveAmount)
        .then((result) => {
          // console.log('populous deposit result: ');
          // console.log(result);
          return DepositContractsManager.getActiveDepositList(settings.web3, contract.depositContractsManager, settings.from, settings.INVESTOR1_ACC, contract.populousToken.address, settings.receiveCurrency)
        })
        .then((deposit) => {
          console.log('active deposit list: ', deposit);
          assert.isAtLeast(parseInt(deposit[1]), settings.depositAmount, "Failed getting correct ppt deposit amount");
          assert.isAtLeast(parseInt(deposit[2]), settings.receiveAmount, "Failed getting correct poken receive amount");
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
          expect(parseInt(deposit[0])).to.equal(settings.depositAmount);
          expect(parseInt(deposit[1])).to.equal(settings.receiveAmount);
          expect(deposit[2]).to.be.false;
          done();
        })
        .catch(e => {
          done(e);
        })
        .finally(e => expect(e).to.be.undefined);
    });
  });
});
