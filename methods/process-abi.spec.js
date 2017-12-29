import { expect } from 'chai';

import EthComm from '../EthConnect';
import getRandomContractName from '../helpers/get-random-contract-name';

describe('The processABI method', () => {
  const ethComm = new EthComm();
  const contactName = getRandomContractName(ethComm.contractsPath);

  it('gets the contract instance', done => {
    ethComm.processABI(contactName)
      .then(() => done())
      .catch(e => {
        expect(e).to.be.undefined;
        done();
      });
  });

  it('returns an error when finding the file fails', done => {
    ethComm.processABI('MadeUpContract')
      .then(() => done())
      .catch(e => {
        expect(e.message).to.be.a('string');
        done();
      });
  });
});
