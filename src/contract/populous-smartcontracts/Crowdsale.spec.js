import { expect, assert } from 'chai';
import Populous from './Populous';
import Crowdsale from './Crowdsale';
import { connect } from '../../methods/connect';
import { network, contract } from '../../config';
import createdCurrencies, { createCurrencyTest } from "../testsCommon/create-currency-test";

const settings = {
  web3: connect(network.ropsten)
};

const currencySymbol = 'EUR';
let currencyTokenContract;
let crowdsaleContract;
const PopulousContract = contract.populous;
const fromAddress = network.ropsten.ethAddress;

describe('create EUR currency', function (done) {

  it('should get currency token address', function (done) {
    this.timeout(15 * 60 * 1000); // 15 min

    createCurrencyTest(
      settings.web3, PopulousContract, network,
      'EUR Pokens', 3, 'EUR')
      .then(() => {
        currencyTokenContract = contract._build('CurrencyToken', createdCurrencies.EUR);
        done();
      })
      .catch(done);
  });
});

describe('Crowdsale methods', () => {

  it('should create crowdsale', function (done) {
    assert(createdCurrencies.EUR, "Currency required.");

    this.timeout(15 * 60 * 1000); // 15 min
    let borrowerId = "B",
      invoiceId = "8888",
      invoiceNumber = "8888_" + Date.now(),
      invoiceAmount = 200,
      fundingGoal = 190,
      platformTaxPercent = 1,
      signedDocumentIPFSHash = "ipfs",
      exxtraTime = 120;


    Populous.createCrowdsale(settings.web3, contract.populous, fromAddress,
      currencySymbol, borrowerId, invoiceId, invoiceNumber, invoiceAmount,
      fundingGoal, platformTaxPercent, signedDocumentIPFSHash, exxtraTime)
      .then(crowdsaleAddress => {
        assert.isString(crowdsaleAddress);
        assert.lengthOf(crowdsaleAddress, 42);
        crowdsaleContract = contract._build('Crowdsale', crowdsaleAddress);
        done();
      })
      .catch(done);
  });

  it('should close created crowdsale', function (done) {
    this.timeout(15 * 60 * 1000); // 15 min

    Crowdsale.closeCrowdsale(settings.web3, crowdsaleContract, fromAddress)
      .then(closedCrowdsaleAddress => {
        assert.equal(closedCrowdsaleAddress, crowdsaleContract.address);
        done();
      })
      .catch(done)
  });

});
