import { expect } from 'chai';
import EthComm from '../EthConnect';
import getRandomContractName from './get-random-contract-name';

describe('The getRandomContractName helper', () => {
  const ethComm = new EthComm();

  it('returns a string for the default settings', done => {
    const name = getRandomContractName(ethComm.contractsPath);
    expect(name).to.be.a('string');
    done();
  });

  it('should throw if the path is no good', done => {
    const getName = () => getRandomContractName('garbage/path');
    expect(getName).to.throw(/no such file or directory/);
    done();
  });

  it('should throw if the path has no JSON files', done => {
    const getName = () => getRandomContractName('src');
    expect(getName).to.throw(/No valid \(JSON\) contract files/);
    done();
  });
});
