import {expect, assert} from 'chai';
import CurrencyToken from './CurrencyToken';
import Populous from './Populous';

import {connect} from '../../methods/connect';
import {unlock} from '../../methods/account';
import {network, contract} from '../../config';
import {createCurrencyTest} from "../testsCommon/create-currency-test";
import createdCurrencies from "../testsCommon/create-currency-test";

const settings = {
  web3: connect(network.ropsten)
};

const config = {
  LEDGER_ACC: "Populous",
  INVESTOR1_ACC: 'A',
  INVESTOR2_ACC: 'B',
  INVESTOR3_ACC: 'C',
  INVESTOR1_ACC_BALANCE: 470,
  INVESTOR2_ACC_BALANCE: 450,
  INVESTOR3_ACC_BALANCE: 600,
};

describe('Currency Token contract', () => {

  let currencyTokenContract;
  const PopulousContract = contract.populous;

  it('should get currency token address', function (done) {
    this.timeout(15 * 60 * 1000); // 15 min

    unlock(settings.web3, network.ropsten.ethAddress, network.ropsten.ethAddressPassword)
      .then((unlockResult) => {

        createCurrencyTest(
          settings.web3, PopulousContract, network,
          'EUR Pokens', 3, 'EUR')
          .then(() => {
            currencyTokenContract = contract._build('CurrencyToken', createdCurrencies.EUR);
            done();
          })
          .catch(done)

      });
  });


  describe('CurrencyToken functions', () => {

    it("should mint EUR tokens: " + config.INVESTOR1_ACC_BALANCE, function (done) {
      assert(createdCurrencies.EUR, "Currency required.");
      this.timeout(15 * 60 * 1000); // 15 min

      const mintAmount = config.INVESTOR1_ACC_BALANCE;

      Populous.mintTokens(settings.web3, PopulousContract, network.ropsten.ethAddress, 'EUR', mintAmount)
        .then(() => {
          return Populous.getLedgerEntry(settings.web3, PopulousContract, network.ropsten.ethAddress,
            "EUR", config.LEDGER_ACC);
        })
        .then((amount) => {
          assert.isAtLeast(amount, mintAmount, "Failed minting EUR tokens");
          done();
        })
        .catch(done);
    });

    it("should transfer EUR tokens to config.INVESTOR1_ACC", function (done) {
      this.timeout(15 * 60 * 1000); // 15 min

      assert(createdCurrencies.EUR, "Currency required.");

      Populous.transfer(settings.web3, PopulousContract, network.ropsten.ethAddress,
        'EUR', config.LEDGER_ACC, config.INVESTOR1_ACC, config.INVESTOR1_ACC_BALANCE)
        .then((result) => {
          return Populous.getLedgerEntry(settings.web3, PopulousContract, network.ropsten.ethAddress,
            "EUR", config.INVESTOR1_ACC);
        })
        .then((investor1Amount) => {
          assert.isAtLeast(investor1Amount, config.INVESTOR1_ACC_BALANCE, "Failed transfer EUR tokens");
          done();
        })
        .catch(done)
    });

    it("should withdraw EUR tokens of config.INVESTOR1_ACC to a given external address", function (done) {
      this.timeout(15 * 60 * 1000); // 15 min

      assert(createdCurrencies.EUR, "Currency required.");

      const externalAddress = network.ropsten.ethAddress;
      const withdrawalAmount = 8;

      // withdraw withdrawal amount of EUR tokens from 'A' and send to externalAddress
      Populous
        .withdraw(settings.web3, PopulousContract, network.ropsten.ethAddress,
          externalAddress, config.INVESTOR1_ACC, 'EUR', withdrawalAmount)
        .then(function (result) {
          return CurrencyToken.balanceOf(settings.web3, currencyTokenContract, network.ropsten.ethAddress,
            externalAddress);
        })
        .then(function (balanceExternalAddress) {
          // check withdrawal amount of EUR tokens was allocated externalAddress
          assert.isAtLeast(balanceExternalAddress, withdrawalAmount, "Failed withdrawal");
          // check withdrawal amount of EUR tokens was withdrawn from 'A'
          return Populous.getLedgerEntry(settings.web3, PopulousContract, network.ropsten.ethAddress,
            "EUR", config.INVESTOR1_ACC);
        })
        .then(function (ledgerInvestor1) {
          assert.isAtLeast(ledgerInvestor1, config.INVESTOR1_ACC_BALANCE - withdrawalAmount, "Failed withdrawal");
          done();
        })
        .catch(done);
    });

    it("should deposit EUR tokens of config.INVESTOR1_ACC from an external address, e.g., 0x93123461712617b2f828494dbf5355b8a76d6051", function (done) {
      this.timeout(15 * 60 * 1000); // 15 min

      assert(createdCurrencies.EUR, "Currency required.");

      const externalAddress = network.ropsten.ethAddress;
      const depositAmount = 8;
      // deposit EUR tokens from externalAddress to 'A'
      CurrencyToken
        .transferToContract(settings.web3, currencyTokenContract, network.ropsten.ethAddress,
          PopulousContract.address, depositAmount, config.INVESTOR1_ACC)
        .then(function (result) {
          // check that depositAmount is deducted from externalAddress account
          return CurrencyToken.balanceOf(settings.web3, currencyTokenContract, network.ropsten.ethAddress,
            externalAddress);
        })
        .then(function (value) {
          assert.isNumber(value, "Failed deposit");
          // check that the depositAmount has been added to 'A'
          return Populous.getLedgerEntry(settings.web3, PopulousContract, network.ropsten.ethAddress,
            "EUR", config.INVESTOR1_ACC);
        })
        .then(function (value) {
          assert.isAtLeast(value, config.INVESTOR1_ACC_BALANCE, "Failed deposit");
          done();
        })
        .catch(done);
    });

    it('should return balance on address ' + network.ropsten.ethAddress, function (done) {

      CurrencyToken.balanceOf(settings.web3, currencyTokenContract, network.ropsten.ethAddress,
        network.ropsten.ethAddress)
        .then(result => {

          assert.isNumber(result, 'Failed to get balance');
          done();
        })
        .catch(done);
    });

  });


});
