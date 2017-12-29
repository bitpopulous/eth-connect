import bindObject from './helpers/bind-object';
import populousObject from './methods/populous';
import crowdsaleObject from './methods/crowdsale';

const apiObject = {};

apiObject.getDepositAddress = function getDepositAddress(ethId) {
  return this.getValueFromContract('DepositContractsManager', 'getDepositAddress', ethId);
};

/** Methods with custom logic, need to be implemented in future (populous-ethcomm)
 * deposit - probably already done as
 * requestDeployed
 * getGroups
 * runInvoiceAuctionEnd
 * runAfterPaymentReceived
 */

function api() {
  const binded = bindObject.call(this, apiObject);

  binded.populous = bindObject.call(this, populousObject);
  binded.crowdsale = bindObject.call(this, crowdsaleObject);

  return binded;
}

export default api;

