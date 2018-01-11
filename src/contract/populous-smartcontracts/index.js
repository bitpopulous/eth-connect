import populous from './Populous';
import depositContractsManager from './DepositContractsManager';
import currencyToken from "./CurrencyToken";
import crowdSale from "./Crowdsale";
import {connect} from "../../methods/connect";
import config from "../../config/index";

const connectInst = connect(config.network.ropsten);

const boundContracts = {
  populous,
  currencyToken,
  depositContractsManager,
  crowdSale
};

function prepareEthMethods() {
  for (const contract in boundContracts) {
    const contractMethods = boundContracts[contract];
    for (const method in contractMethods) {
      if (contractMethods.hasOwnProperty(method)) {
        boundContracts[contract][method] = contractMethods[method]
          .bind(boundContracts[contract], connectInst, config.contract[contract], config.network.ropsten.ethAddress);
      }
    }
  }
}

prepareEthMethods();

export default boundContracts;
