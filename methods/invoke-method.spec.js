import { expect } from 'chai';
import sinon from 'sinon';

import EthComm from '../EthConnect';
import invokeMethod from './invoke-method';

describe('The invokeMethod method', () => {
  const ethComm = new EthComm();
  const ethCommInvokeMethod = invokeMethod.bind(ethComm);

  it('returns an error when the getConstant value isnt a bool', done => {
    ethCommInvokeMethod('false')
      .catch(e => {
        expect(e.message).to.be.a('string');
        expect(e.message).to.contain('pass a boolean');
        done();
      });
  });

  it('returns an error when not passed a methodName', done => {
    ethCommInvokeMethod(false)
      .catch(e => {
        expect(e.message).to.be.a('string');
        expect(e.message).to.contain('pass a string');
        done();
      });
  });

  it('returns an error when params arg isnt an array', done => {
    ethCommInvokeMethod(false, 'someMethod', 'notAnArray')
      .catch(e => {
        expect(e.message).to.be.a('string');
        expect(e.message).to.contain('pass an array');
        done();
      });
  });

  it('returns an error when not passed a contract', done => {
    ethCommInvokeMethod(false, 'someMethod', null)
      .catch(e => {
        expect(e.message).to.be.a('string');
        expect(e.message).to.contain('pass a contract instance');
        done();
      });
  });

  it('calls the method.send method with the TX params', done => {
    //
    // Stub out the eth contract instance
    const send = sinon.stub().returns(new Promise(res => res()));
    const method = sinon.stub().returns({ send });
    const instance = { methods: { method } };

    ethCommInvokeMethod(false, 'method', [], instance)
      .finally(() => {
        expect(send.calledWith({
          from: ethComm.localAddress,
          gas: ethComm.gas.transaction,
        })).to.be.true;
        expect(method.called).to.be.true;
        done();
      });
  });

  it('calls the method.call method with no TX params', done => {

    // Stub out the eth contract instance
    const call = sinon.stub().returns(new Promise(res => res()));
    const method = sinon.stub().returns({ call });
    const instance = { methods: { method } };

    ethCommInvokeMethod(true, 'method', [], instance)
      .finally(() => {
        expect(call.calledWith()).to.be.true;
        expect(method.called).to.be.true;
        done();
      });
  });
});
