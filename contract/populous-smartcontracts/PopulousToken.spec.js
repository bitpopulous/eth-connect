import { expect, assert } from 'chai';
import DepositContractsManager from './DepositContractsManager';
import PopulousToken from './PopulousToken';
import { connect } from '../../methods/connect';
import { network, contract } from '../../config';

let settings = {
    web3: connect(network.ropsten),
    from: '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35',
    receiveCurrency: 'GBP',
    depositAmount: 200,
    receiveAmount: 150,
    INVESTOR1_ACC: 'A',
    faucetAmount: 200,
};

describe('The ppt faucet and balanceOf methods', () => {
  it('successfully gets ppt from faucet to platform account', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min
    PopulousToken.faucet(settings.web3, contract.populousToken, settings.from, settings.faucetAmount)
      .then((faucet) => {
        console.log('PPT faucet: ', faucet);
        expect(faucet).to.exist;
        
        return PopulousToken.balanceOf(settings.web3, contract.populousToken, network.ropsten.ethAddress, settings.from)
      })
      .then((faucetValue) => {
        console.log('ppt balance: ', faucetValue);
        assert.isAtLeast(faucetValue, settings.depositAmount, "Failed getting ppt from faucet");
        done();
      })
      .catch(e => {
        done(e);
      })
      .finally(e => expect(e).to.be.undefined);
  });
});

describe('The ppt transferToAddress method', () => {
  it('successfully transfers ppt from platform balance to deposit contract address', function(done) {
    this.timeout(15 * 60 * 1000); // 15 min

    DepositContractsManager.getDepositAddress(settings.web3, contract.depositContractsManager, settings.from, settings.INVESTOR1_ACC)
      .then((depositAddress) => {
        expect(depositAddress).to.be.a('string');
        expect(depositAddress).to.have.lengthOf(42);
        global.depositAddress = depositAddress;
        return PopulousToken.transferToAddress(settings.web3, contract.populousToken, settings.from, depositAddress, settings.depositAmount)
      })
      .then((pptTransfer) => {
        console.log('PPT transfer: ', pptTransfer);
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