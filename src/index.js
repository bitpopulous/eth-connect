import methods from './methods/index';
import config from './config/index';

import smartContracts from './contract/populous-smartcontracts'

/**
 * Replaced with bound contracts
 *
import {
    populous,
    depositContractsManager,
    crowdSale,
    currencyToken
} from './contract/populous-smartcontracts'
 */

export default {
    methods: {
        account: methods.account,
        connect: methods.connect,
        event: methods.event
    },
    config: {
        network: config.network,
        contract: config.contract
    },
    contracts: {
      ...smartContracts,
    }

  /**
   * Replaced with bound contracts for encapsulation and simpler usage in the platforms
   *
  contracts: {
    populous: populous,
    depositContractsManager: depositContractsManager,
    crowdSale: crowdSale,
    currencyToken: currencyToken
  }

   */
}