import populous from './Populous';
import depositContractsManager from './DepositContractsManager';
import currencyToken from "./CurrencyToken";
import crowdSale from "./Crowdsale";
import {connect} from "../../methods/connect";
import config from "../../config/index";

const connectInst = connect(config.network.ropsten);

const bindedContracts = {
  populous,
  currencyToken,
  depositContractsManager,
  crowdSale
};

function prepareEthMethods() {
  for (const contract in bindedContracts) {
    const contractMethods = bindedContracts[contract];
    for (const method in contractMethods) {
      if (contractMethods.hasOwnProperty(method)) {
        bindedContracts[contract][method] = contractMethods[method]
          .bind(bindedContracts[contract], connectInst, config.contract[contract], config.network.ropsten.ethAddress);
      }
    }
  }
}

prepareEthMethods();

export default bindedContracts;