import { expect } from 'chai';
import EthComm from './EthConnect';

describe('EthComm core', () => {
  it('EthComm exists', () => expect(EthComm).is.not.undefined);

  it('it has a default config', () => {
    const ethComm = new EthComm();
    expect(ethComm.localAddressPassword).is.equal(process.env.ETH_COMM_LOCAL_ADDRESS_PASSWORD);
  });

  it('you can override the default config', () => {
    const ethComm = new EthComm({ localAddressPassword: '1111' });
    expect(ethComm.localAddressPassword).is.equal('1111');
    expect(ethComm.localAddress).is
      .equal(process.env.ETH_COMM_LOCAL_ADDRESS);
  });

  it('there should be a web3 instance attached to ethComm', () => {
    const ethComm = new EthComm();
    expect(ethComm.web3).is.not.undefined;
  });

  describe('When extending EthComm', () => {
    class NewEthComm extends EthComm {
      constructor(config) {
        super(config);
        this.foo = 'bar';
      }
    }

    it('you can add new properties and methods', () => {
      const newEthComm = new NewEthComm();
      expect(newEthComm.foo).is.equal('bar');
    });

    it('it still has a default config', () => {
      const newEthComm = new NewEthComm();
      expect(newEthComm.localAddressPassword).is.equal(process.env.ETH_COMM_LOCAL_ADDRESS_PASSWORD);
    });

    it('you can still override the default config', () => {
      const newEthComm = new NewEthComm({ localAddressPassword: '1111' });
      expect(newEthComm.localAddressPassword).is.equal('1111');
      expect(newEthComm.localAddress).is
        .equal(process.env.ETH_COMM_LOCAL_ADDRESS);
    });
  });
});
