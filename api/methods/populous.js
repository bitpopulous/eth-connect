import {getValueFromTX} from '../../helpers/index';

const populousObject = {};

populousObject.createCurrency = function createCurrency(params = {
  tokenName: undefined,
  decimalUnits: undefined,
  tokenSymbol: undefined,
}) {
  const preparedParams = {
    ...params,
    tokenName: this.web3.utils.toHex(params.tokenName),
    tokenSymbol: this.web3.utils.toHex(params.tokenSymbol),
  };

  const getAddress = getValueFromTX.bind(
    null,
    'EventNewCurrency',
    'addr'
  );

  return this.callContractMethod('Populous', 'createCurrency', ...Object.values(preparedParams))
    .then(getAddress);
};

populousObject.getCurrency = function getCurrency(currencySymbol) {
  const currencyHex = this.web3.utils.toHex(currencySymbol);

  return this.getValueFromContract('Populous', 'getCurrency', currencyHex);
};

populousObject.getCurrencySymbol = function getCurrencySymbol(currencyAddress) {
  return this.getValueFromContract('Populous', 'getCurrencySymbol', currencyAddress)
    .then((hexSymbol) =>
      (this.web3.utils.toAscii(hexSymbol)).replace(new RegExp(/\u0000/, 'g'), ''));
};

populousObject.mintTokens = function mintTokens(params = {
  currencySymbol: undefined,
  amount: undefined,
}) {
  const getAmount = getValueFromTX.bind(
    null,
    'EventMintTokens',
    'amount'
  );
  const preparedParams = {
    ...params,
    currencySymbol: this.web3.utils.toHex(params.currencySymbol),
  };

  return this.callContractMethod('Populous', 'mintTokens', ...Object.values(preparedParams))
    .then(getAmount);
};

populousObject.destroyTokens = function destroyTokens(...params) {
  return this.callContractMethod('Populous', 'destroyTokens', ...params);
};

populousObject.withdraw = function withdraw(...params) {
  return this.callContractMethod('Populous', 'withdraw', ...params);
};

populousObject.transfer = function transfer(params = {
  currencySymbol: undefined,
  fromLedger: undefined,
  toLedger: undefined,
  amount: undefined,
}) {
  const preparedParams = {
    ...params,
    currencySymbol: this.web3.utils.toHex(params.currencySymbol),
    fromLedger: this.web3.utils.toHex(params.fromLedger),
    toLedger: this.web3.utils.toHex(params.toLedger),
  };

  const getTransferAmount = getValueFromTX.bind(
    null,
    'EventInternalTransfer',
    'amount'
  );

  return this.callContractMethod('Populous', 'transfer', ...Object.values(preparedParams))
    .then(getTransferAmount)
    .then((amount) => Number.parseInt(amount, 10));
};

populousObject.createCrowdsale = function createCrowdsale(params = {
  currencySymbol: undefined,
  borrowerId: undefined,
  invoiceId: undefined,
  invoiceNumber: undefined,
  invoiceAmount: undefined,
  fundingGoal: undefined,
  platformTaxPercent: undefined,
  signedDocumentIPFSHash: undefined,
}) {
  const preparedParams = {
    ...params,
    currencySymbol: this.web3.utils.toHex(params.currencySymbol),
    borrowerId: this.web3.utils.toHex(params.borrowerId),
    invoiceId: this.web3.utils.toHex(params.invoiceId),
  };
  const getAddress = getValueFromTX.bind(
    null,
    'EventNewCrowdsale',
    'crowdsale'
  );

  return this.callContractMethod('Populous', 'createCrowdsale', ...Object.values(preparedParams))
    .then(getAddress);
};
populousObject.closeCrowdsale = function closeCrowdsale(crowdsaleAddr) {
  return this.callContractMethod('Populous', 'closeCrowdsale', crowdsaleAddr);
};

populousObject.bid = function bid(...params) {
  return this.callContractMethod('Populous', 'bid', ...params);
};

populousObject.initialBid = function initialBid(...params) {
  return this.callContractMethod('Populous', 'initialBid', ...params);
};

populousObject.fundBeneficiary = function fundBeneficiary(crowdsaleAddr) {
  return this.callContractMethod('Populous', 'fundBeneficiary', crowdsaleAddr);
};

populousObject.refundLosingGroups = function refundLosingGroups(...params) {
  return this.callContractMethod('Populous', 'refundLosingGroups', ...params);
};

populousObject.refundLosingGroupBidder = function refundLosingGroupBidder(...params) {
  return this.callContractMethod('Populous', 'refundLosingGroupBidder', ...params);
};

populousObject.invoicePaymentReceived = function invoicePaymentReceived(...params) {
  return this.callContractMethod('Populous', 'invoicePaymentReceived', ...params);
};

populousObject.fundWinnerGroup = function fundWinnerGroup(...params) {
  return this.callContractMethod('Populous', 'fundWinnerGroup', ...params);
};

populousObject.fundWinnerGroupBidder = function fundWinnerGroupBidder(...params) {
  return this.callContractMethod('Populous', 'fundWinnerGroupBidder', ...params);
};

populousObject.createDepositContract = function createDepositContract(...params) {
  return this.callContractMethod('Populous', 'createDepositContract', ...params);
};

populousObject.createDepositAddress = function createDepositAddress(ethId) {
  const getAddress = getValueFromTX.bind(
    null,
    'EventNewDepositContract',
    'depositContractAddress'
  );

  // Convert the ethId string to hex
  const ethIdHex = this.web3.utils.toHex(ethId);

  return new Promise((resolve, reject) => {
    this.callContractMethod('Populous', 'createDepositContract', ethIdHex)
      .then(getAddress)
      .then(resolve)
      .catch(reject);
  });
}

populousObject.deposit = function deposit(...params) {
  return this.callContractMethod('Populous', 'deposit', ...params);
};

populousObject.releaseDeposit = function releaseDeposit(...params) {
  return this.getValueFromContract('Populous', 'releaseDeposit', ...params);
};

populousObject.getLedgerEntry = function getLedgerEntry(params = {
  currencySymbol: undefined,
  ledgerId: undefined,
}) {

  const preparedParams = {
    ...params,
    currencySymbol: this.web3.utils.toHex(params.currencySymbol),
    ledgerId: this.web3.utils.toHex(params.ledgerId),
  };

  return this.getValueFromContract('Populous', 'getLedgerEntry', ...Object.values(preparedParams))
    .then((ledgerAmount) => Number.parseInt(ledgerAmount, 10));
};

export default populousObject;
