import Web3 from 'web3';

import {
  getContract,
  invokeMethod,
  processABI,
  subscribeToEvents,
  unlockAccount,
  callContractMethod,
  callContractMethodAtAddress,
  getValueFromContract,
  getValueFromContractAtAddress,
} from './methods';
import api from './api';

/**
 * EthComm
 * The entry point for the EthComm module
 */
export default class EthConnect {
  constructor(config = {}) {

    // Setup config ---------------
    const {

      // Path from root
      contractsPath = '../populous-smartcontracts/build/contracts',
      ethRPCURL = process.env.ETH_COMM_RCP_URL,
      localAddress = process.env.ETH_COMM_LOCAL_ADDRESS,
      localAddressPassword = process.env.ETH_COMM_LOCAL_ADDRESS_PASSWORD,
      gas = {
        deployment: 4700000,
        transaction: 3000000,
      },
    } = config;

    // Config assignment
    this.contractsPath = contractsPath;
    this.localAddress = localAddress;
    this.localAddressPassword = localAddressPassword;
    this.gas = gas;

    // Setup a new web3 instance
    this.web3 = new Web3(new Web3.providers.WebsocketProvider(ethRPCURL));

    // Setup a cache for our contract instances
    this.contractsCache = {};

    // Module methods ---------------
    this.getConstant = invokeMethod.bind(this, true);
    this.makeTransaction = invokeMethod.bind(this, false);
    this.getContract = getContract.bind(this);
    this.subscribeToEvents = subscribeToEvents.bind(this);
    this.processABI = processABI.bind(this);
    this.unlockAccount = unlockAccount.bind(this);
    this.call = unlockAccount.bind(this);
    this.callContractMethod = callContractMethod.bind(this);
    this.callContractMethodAtAddress = callContractMethodAtAddress.bind(this);
    this.getValueFromContract = getValueFromContract.bind(this);
    this.getValueFromContractAtAddress = getValueFromContractAtAddress.bind(this);


    this.api = api.call(this);

    // Config tests ---------------
    // Make sure the gas object has the needed properties
    if (!this.gas.deployment && !this.gas.transaction) {
      throw new Error(
        'Config error',
        'gas config must be an object with "deployment" and "transaction" properties'
      );
    }
  }
}
