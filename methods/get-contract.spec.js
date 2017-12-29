import { expect } from 'chai';
import sinon from 'sinon';

import EthComm from '../EthConnect';
import getRandomContractName from '../helpers/get-random-contract-name';

describe('The get contract method', () => {
  it('returns an error when the contract name passed isnt a string', done => {
    new EthComm().getContract({ name: 'Foo' })
      .catch(e => {
        expect(e.message).to.be.a('string');
        expect(e.message).to.contain('string');
        done();
      });
  });

  it('nullify non-string address params', done => {
    const ethComm = new EthComm();
    const contactName = getRandomContractName(ethComm.contractsPath);

    ethComm.getContract(contactName, ['d3jhe2938hr2i3'])
      .catch(e => e)
      .finally(e => {
        expect(e).to.be.undefined;
        done();
      });
  });

  describe('When only passing a contract', () => {
    it('if not cached, creates contract instance from the file and caches it', done => {
      const ethComm = new EthComm();
      const contactName = getRandomContractName(ethComm.contractsPath);

      ethComm.getContract(contactName)
        .then(contract => {
          expect(contract).to.be.an('object');
          expect(ethComm.contractsCache).to.have.property(contactName);
          done();
        })
        .catch(e => {
          expect(e).to.be.undefined;
          done();
        });
    });

    it('returns an error when getting the contract fails', done => {
      new EthComm().getContract('RandomContractName')
        .catch(e => {
          expect(e.message).to.be.a('string');
          done();
        });
    });

    it('if cached, it returns the cached contract instance', done => {
      const ethComm = new EthComm();

      // Stub the contract cache
      sinon.stub(ethComm, 'contractsCache').value({
        RealContract: { someContractInstanceProp: 'someVal' }
      });

      ethComm.getContract('RealContract')
        .then(contract => {
          expect(contract).to.have.property('someContractInstanceProp');
          done();
        })
        .catch(e => {
          expect(e).to.be.undefined;
          done();
        });
    });
  });

  describe('When passing a contract and an address', () => {

    // We need to skip this one becuase out address is invalid
    // (we need an address which has actaully be deployed!)
    it('if not cached, creates contract instance from the file and caches it', done => {
      const ethComm = new EthComm();
      const contactName = 'Populous';

      // NOTE: May need to update this if new contracts have been deployed
      const address = '0xebfade9f6f92cdbfa960d530deec811a8b0fdce7';

      ethComm.getContract(contactName, address)
        .then(contract => {
          expect(contract).to.be.an('object');
          expect(ethComm.contractsCache).to.have.property(
            contactName + address
          );
          done();
        })
        .catch(e => {
          expect(e).to.be.undefined;
          done();
        });
    });

    it('if the address passed is no valid (on the network), it should error', done => {
      const ethComm = new EthComm();
      const contactName = getRandomContractName(ethComm.contractsPath);
      const address = '00000000000000000000000000000000';

      ethComm.getContract(contactName, address)
        .catch(e => {
          expect(e.message).to.be.a('string');
          done();
        });
    });

    it('returns an error when getting the contract fails', done => {
      new EthComm().getContract('RandomContractName', 'someRandomAddress')
        .catch(e => {
          expect(e.message).to.be.a('string');
          done();
        });
    });

    it('if cached, it returns the cached contract instance', done => {
      const ethComm = new EthComm();

      // Stub the contract cache
      sinon.stub(ethComm, 'contractsCache').value({
        RealContractAtSomeAddress: { someContractInstanceProp: 'someVal' }
      });

      ethComm.getContract('RealContract', 'AtSomeAddress')
        .then(contract => {
          expect(contract).to.have.property('someContractInstanceProp');
          done();
        })
        .catch(e => {
          expect(e).to.be.undefined;
          done();
        });
    });
  });
});
