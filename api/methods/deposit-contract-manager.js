const depositContractManager = {};

depositContractManager.getDepositAddress = function getDepositAddress(ethId) {
  return this.getValueFromContract('DepositContractsManager', 'getDepositAddress', ethId);
};

export default depositContractManager;