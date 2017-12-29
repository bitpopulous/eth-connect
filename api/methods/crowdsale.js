const crowdsaleObject = {};

crowdsaleObject.createGroup = function getGroupsCount(crowdSaleAddress, ...params) {
  return this.callContractMethodAtAddress('Crowdsale', 'createGroup', crowdSaleAddress, ...params);
};
crowdsaleObject.getGroupsCount = function getGroupsCount(crowdSaleAddress) {
  return this.getValueFromContractAtAddress('Crowdsale', 'getGroupsCount', crowdSaleAddress);
};

// Missed in new contract
// apiObject.paidAmount = function paidAmount(crowdSaleAddress) {
//   return this.getValueFromContractAtAddress('Crowdsale', 'paidAmount', crowdSaleAddress);
// };

crowdsaleObject.getGroup = function getGroup(crowdSaleAddress, ...params) {
  return this.getValueFromContractAtAddress('Crowdsale', 'getGroup', crowdSaleAddress, ...params);
};
crowdsaleObject.getGroupBidder = function getGroupBidder(crowdSaleAddress, ...params) {
  return this.getValueFromContractAtAddress('Crowdsale', 'getGroupBidder', crowdSaleAddress, ...params);
};

// Missed in new contract
// apiObject.getGroupsOnAddress = function getGroups(crowdSaleAddress) {
//   return this.getValueFromContractAtAddress('Crowdsale', 'getGroups', crowdSaleAddress);
// };

// Missed in new contract
// apiObject.winnerGroupIndex = function winnerGroupIndex(crowdSaleAddress) {
//   return this.getValueFromContractAtAddress('Crowdsale', 'winnerGroupIndex', crowdSaleAddress);
// };

export default crowdsaleObject;
