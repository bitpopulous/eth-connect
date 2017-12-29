const crowdsaleObject = {};

crowdsaleObject.createGroup = function createGroup(crowdSaleAddress, params = {
  groupName: undefined,
  goalAmount: undefined,
}) {
  return this.callContractMethodAtAddress('Crowdsale', 'createGroup', crowdSaleAddress, ...params);
};

crowdsaleObject.getGroupsCount = function getGroupsCount(crowdSaleAddress) {
  return this.getValueFromContractAtAddress('Crowdsale', 'getGroupsCount', crowdSaleAddress);
};

crowdsaleObject.paidAmount = function paidAmount(crowdSaleAddress) {
  return this.getValueFromContractAtAddress('Crowdsale', 'paidAmount', crowdSaleAddress);
};

crowdsaleObject.getGroup = function getGroup(crowdSaleAddress, ...params) {
  return this.getValueFromContractAtAddress('Crowdsale', 'getGroup', crowdSaleAddress, ...params);
};

crowdsaleObject.getGroupBidder = function getGroupBidder(crowdSaleAddress, ...params) {
  return this.getValueFromContractAtAddress('Crowdsale', 'getGroupBidder', crowdSaleAddress, ...params);
};

crowdsaleObject.getGroupsOnAddress = function getGroupsOnAddress(crowdSaleAddress) {
  return this.getValueFromContractAtAddress('Crowdsale', 'getGroups', crowdSaleAddress);
};

crowdsaleObject.winnerGroupIndex = function winnerGroupIndex(crowdSaleAddress) {
  return this.getValueFromContractAtAddress('Crowdsale', 'winnerGroupIndex', crowdSaleAddress);
};

export default crowdsaleObject;
