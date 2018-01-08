import { expect, assert } from 'chai';
import Populous from './Populous';
import {connect} from '../../methods/connect';
import { network, contract } from '../../config';

let settings = {
  web3: connect(network.ropsten)
}

let fromAddr = '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35',
  clientExternal = '0x93123461712617b2f828494dbf5355b8a76d6051',
  tokenName = 'GBP Pokens',
  decimalUnits = 3,
  fromId = 'Populous',
  clientId = 'A',
  amount = 190,
  currencySymbol = 'GBP',
  data = '', 
  crowdsale;

describe('getLedgerEntry function', () => {
  it('successfully get ledger entry', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
        Populous.getLedgerEntry(settings.web3, contract.populous, fromAddr, currencySymbol, fromId)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('getCurrency function', () => {
  it('successfully get currency', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.getCurrency(settings.web3, contract.populous, fromAddr, currencySymbol)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('getCurrencySymbol function', () => {
  it('successfull get currency symbol', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.getCurrency(settings.web3, contract.populous, fromAddr, currencySymbol)
      .then(result => {
        Populous.getCurrencySymbol(settings.web3, contract.populous, fromAddr, result)
          .then(result => {
            expect(result).to.exist;
            done();
          })
          .catch(e => done(e))
          .finally(e => expect(e).to.be.undefined);
      })
  });
});

describe('createCurrency function', () => {
  it('successfully create currency', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.createCurrency(settings.web3, contract.populous, fromAddr, tokenName, decimalUnits, currencySymbol)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('withdraw function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.withdraw(settings.web3, contract.populous, fromAddr, clientExternal, clientId, currencySymbol, amount)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('mintTokens function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.mintTokens(settings.web3, contract.populous, fromAddr, currencySymbol, amount)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('destroyTokens function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.destroyTokens(settings.web3, contract.populous, fromAddr, currencySymbol, amount)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('transfer function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.transfer(settings.web3, contract.populous, fromAddr, fromId, clientId, currencySymbol, amount)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('createCrowdsale function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    let borrowerId = "B",
      invoiceId = "8888",
      invoiceNumber = "8888_" + Date.now(),
      invoiceAmount = 200, 
      fundingGoal = 190, 
      platformTaxPercent = 1, 
      signedDocumentIPFSHash = "ipfs";
    Populous.createCrowdsale(settings.web3, contract.populous, fromAddr,
      currencySymbol, borrowerId, invoiceId, invoiceNumber, invoiceAmount, fundingGoal, platformTaxPercent, signedDocumentIPFSHash)
      .then(crowdsaleAddress => {
        assert.isString(crowdsaleAddress);
        assert.lengthOf(crowdsaleAddress, 42);
        crowdsale = crowdsaleAddress;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('closeCrowdsale function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.closeCrowdsale(settings.web3, contract.populous, fromAddr, crowdsale)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('bid function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    let groupIndex = 1,
      bidderId = "A",
      name = "ACC1",
      value = 25;
    Populous.bid(settings.web3, contract.populous, fromAddr, crowdsale, groupIndex, bidderId, name, value)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('initialBid function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    let groupName = 'Winner group',
      goal = 777, 
      bidderId = "A", 
      name = "ACC1", 
      value = 600;
    Populous.initialBid(settings.web3, contract.populous, fromAddr, crowdsale, groupName, goal, bidderId, name, value)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('fundBeneficiary function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.fundBeneficiary(settings.web3, contract.populous, fromAddr, crowdsale)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('refundLosingGroups function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.refundLosingGroups(settings.web3, contract.populous, fromAddr, crowdsale)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('refundLosingGroupBidder function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.refundLosingGroupBidder(settings.web3, contract.populous, fromAddr, crowdsale, 1, 1)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('invoicePaymentReceived function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.invoicePaymentReceived(settings.web3, contract.populous, fromAddr, crowdsale, 200)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('fundWinnerGroup function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.fundWinnerGroup(settings.web3, contract.populous, fromAddr, crowdsale)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('fundWinnerGroupBidder function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.fundWinnerGroupBidder(settings.web3, contract.populous, fromAddr, crowdsale, 1)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('createDepositContract function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.createDepositContract(settings.web3, contract.populous, fromAddr, clientId)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('deposit function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.deposit(settings.web3, contract.populous, fromAddr, clientId, clientExternal, currencySymbol, 200, 190)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('releaseDeposit function', () => {
  it('success', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    Populous.releaseDeposit(settings.web3, contract.populous, fromAddr, clientId, clientExternal, currencySymbol, clientExternal, 0)
      .then(result => {
        expect(result).to.exist;
        done();
      })
      .catch(e => done(e))
      .finally(e => expect(e).to.be.undefined);
  });
});