import bindObject from './helpers/bind-object';
import populousObject from './methods/populous';
import crowdsaleObject from './methods/crowdsale';
import depositContractManager from './methods/deposit-contract-manager';

/** Methods with custom logic, need to be implemented in future (populous-ethcomm)
 * deposit - probably already done as
 * requestDeployed
 * getGroups
 * runInvoiceAuctionEnd
 * runAfterPaymentReceived
 */

function api() {
  const binded = {};

  binded.populous = bindObject.call(this, populousObject);
  binded.crowdsale = bindObject.call(this, crowdsaleObject);
  binded.depositContractManager = bindObject.call(this, depositContractManager);

  return binded;
}

export default api;

