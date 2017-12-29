import {assert} from 'chai';
import PopulousEthComm from '../../index';
import createdCurrencies, {createCurrencyTest} from '../../testsCommon/create-currency-test';

const config = {
  LEDGER_ACC: 'Populous',
  INVESTOR1_ACC: 'A',
  INVESTOR2_ACC: 'B',
  INVESTOR3_ACC: 'C',
  INVESTOR1_ACC_BALANCE: 470,
  INVESTOR2_ACC_BALANCE: 450,
  INVESTOR3_ACC_BALANCE: 600,
};

describe('Populous / Crowdsale > ', function () {
  const ethComm = new PopulousEthComm();

  describe('Init currency token', function () {
    it('should init currency token Euros EUR', function (done) {
      this.timeout(15 * 60 * 1000); // 15 min

      const params = {
        tokenName: 'EUR Pokens',
        decimalUnits: 3,
        tokenSymbol: 'EUR',
      };

      if (!createdCurrencies[params.tokenSymbol]) {
        createCurrencyTest(ethComm, params)
          .then((currencyAddress) => {
            assert.isString(currencyAddress);
            assert.lengthOf(currencyAddress, 42);

            console.log('currency EUR address', currencyAddress);
            done();
          })
          .catch(done)
      } else {
        done();
      }
    });
  });

  describe('Bank', function () {
    const mintAmount = config.INVESTOR1_ACC_BALANCE + config.INVESTOR2_ACC_BALANCE + config.INVESTOR3_ACC_BALANCE;

    it('should mint EUR tokens: ' + mintAmount, function (done) {
      assert(createdCurrencies.EUR, 'Currency required.');

      this.timeout(15 * 60 * 1000); // 15 min

      let initialLedgerAmount;
      ethComm.api.populous.getLedgerEntry({
        currencySymbol: 'EUR',
        ledgerId: config.LEDGER_ACC,
      })
        .then((ledgerAmount) => {
          initialLedgerAmount = ledgerAmount;

          return ethComm.api.populous.mintTokens({
            currencySymbol: 'EUR',
            amount: mintAmount,
          });
        })
        .then(mintTokensAmount => {
          return ethComm.api.populous.getLedgerEntry({
            currencySymbol: 'EUR',
            ledgerId: config.LEDGER_ACC,
          })
        })
        .then((ledgerAmount) => {
          console.log('current ledger amount', ledgerAmount);
          assert.isNumber(ledgerAmount);
          assert.equal((ledgerAmount - initialLedgerAmount), mintAmount, 'Failed minting EUR tokens');
          done();
        })
        .catch(done);
    });

    it("should transfer EUR tokens to config.INVESTOR1_ACC, config.INVESTOR2_ACC, config.INVESTOR3_ACC", function (done) {
      assert(createdCurrencies.EUR, "Currency required.");

      this.timeout(15 * 60 * 1000); // 15 min

      const transfers = [
        ethComm.api.populous
          .transfer({
            currencySymbol: "EUR",
            fromLedger: config.LEDGER_ACC,
            toLedger: config.INVESTOR1_ACC,
            amount: config.INVESTOR1_ACC_BALANCE,
          }),
        ethComm.api.populous.transfer({
          currencySymbol: "EUR",
          fromLedger: config.LEDGER_ACC,
          toLedger: config.INVESTOR2_ACC,
          amount: config.INVESTOR2_ACC_BALANCE,
        }),
        ethComm.api.populous.transfer({
          currencySymbol: "EUR",
          fromLedger: config.LEDGER_ACC,
          toLedger: config.INVESTOR3_ACC,
          amount: 250,
        })
      ];

      Promise.all(transfers)
        .then( (transfersResults) => {

          const ledgerAmountsCheck = [
            ethComm.api.populous.getLedgerEntry({
              currencySymbol: "EUR",
              ledgerId: config.INVESTOR1_ACC,
            }),
            ethComm.api.populous.getLedgerEntry({
              currencySymbol: "EUR",
              ledgerId: config.INVESTOR2_ACC,
            }),
            ethComm.api.populous.getLedgerEntry({
              currencySymbol: "EUR",
              ledgerId: config.INVESTOR3_ACC,
            }),
          ];

          return Promise.all(ledgerAmountsCheck);
        })
        .then((ledgerAmountsCheckResults) => {
          assert.isAtLeast(ledgerAmountsCheckResults[0], config.INVESTOR1_ACC_BALANCE, "Failed transfer 1");
          assert.isAtLeast(ledgerAmountsCheckResults[1], config.INVESTOR2_ACC_BALANCE, "Failed transfer 2");
          assert.isAtLeast(ledgerAmountsCheckResults[2], 250, "Failed transfer 3");
          done();
        })
        .catch(done);
    });
  });

  describe("Reach goal with bids > ", function () {
    it('should return a new crowdsale address when passes a valid parapms', function (done) {
      assert(createdCurrencies.EUR, 'Currency required.');

      this.timeout(15 * 60 * 1000); // 15 min

      const args = {
        currencySymbol: 'EUR',
        borrowerId: `bor_${Date.now()}`,
        invoiceId: `inv_${Date.now()}`,
        invoiceNumber: `inv_num_${Date.now()}`,
        invoiceAmount: 10,
        fundingGoal: 8,
        platformTaxPercent: 10,
        signedDocumentIPFSHash: `ipfs_hash_${Date.now()}`,
      };

      ethComm.api.populous.createCrowdsale(args)
        .then(crowdsaleAddress => {
          assert.isString(crowdsaleAddress);
          assert.lengthOf(crowdsaleAddress, 42);
          console.log('Crowdsale address', crowdsaleAddress);

          done();
        })
        .catch(done);
    });
  });
});

