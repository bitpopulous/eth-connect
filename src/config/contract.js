module.exports = {
    _build: (abi, address) =>{
        return {
            abi: abi,
            address: address
        }
    },
    populous: {
        abi: [
            {
              "constant": false,
              "inputs": [
                {
                  "name": "crowdsaleAddr",
                  "type": "address"
                }
              ],
              "name": "fundBeneficiary",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "_accessManager",
                  "type": "address"
                }
              ],
              "name": "updateAccessManager",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "crowdsaleAddr",
                  "type": "address"
                }
              ],
              "name": "closeCrowdsale",
              "outputs": [
                {
                  "name": "success",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "crowdsaleAddr",
                  "type": "address"
                }
              ],
              "name": "fundWinnerGroup",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "DCM",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "_depositContractsManager",
                  "type": "address"
                }
              ],
              "name": "setDCM",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "crowdsaleAddr",
                  "type": "address"
                },
                {
                  "name": "bidderIndex",
                  "type": "uint256"
                }
              ],
              "name": "fundWinnerGroupBidder",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "crowdsaleAddr",
                  "type": "address"
                },
                {
                  "name": "groupName",
                  "type": "string"
                },
                {
                  "name": "goal",
                  "type": "uint256"
                },
                {
                  "name": "bidderId",
                  "type": "bytes32"
                },
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "initialBid",
              "outputs": [
                {
                  "name": "success",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "crowdsaleAddr",
                  "type": "address"
                }
              ],
              "name": "refundLosingGroups",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "_crowdsaleManager",
                  "type": "address"
                }
              ],
              "name": "setCM",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "currency",
                  "type": "address"
                }
              ],
              "name": "getCurrencySymbol",
              "outputs": [
                {
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "name": "from",
                  "type": "bytes32"
                },
                {
                  "name": "to",
                  "type": "bytes32"
                },
                {
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "name": "accountId",
                  "type": "bytes32"
                }
              ],
              "name": "getLedgerEntry",
              "outputs": [
                {
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "_tokenName",
                  "type": "bytes32"
                },
                {
                  "name": "_decimalUnits",
                  "type": "uint8"
                },
                {
                  "name": "_tokenSymbol",
                  "type": "bytes32"
                }
              ],
              "name": "createCurrency",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "crowdsaleAddr",
                  "type": "address"
                },
                {
                  "name": "groupIndex",
                  "type": "uint256"
                },
                {
                  "name": "bidderIndex",
                  "type": "uint256"
                }
              ],
              "name": "refundLosingGroupBidder",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "clientId",
                  "type": "bytes32"
                },
                {
                  "name": "tokenContract",
                  "type": "address"
                },
                {
                  "name": "receiveCurrency",
                  "type": "bytes32"
                },
                {
                  "name": "depositAmount",
                  "type": "uint256"
                },
                {
                  "name": "receiveAmount",
                  "type": "uint256"
                }
              ],
              "name": "deposit",
              "outputs": [
                {
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "clientId",
                  "type": "bytes32"
                }
              ],
              "name": "createDepositContract",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "crowdsaleAddr",
                  "type": "address"
                },
                {
                  "name": "paidAmount",
                  "type": "uint256"
                }
              ],
              "name": "invoicePaymentReceived",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "mintTokens",
              "outputs": [
                {
                  "name": "success",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "from",
                  "type": "address"
                },
                {
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "tokenFallback",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "CM",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "crowdsaleAddr",
                  "type": "address"
                },
                {
                  "name": "groupIndex",
                  "type": "uint256"
                },
                {
                  "name": "bidderId",
                  "type": "bytes32"
                },
                {
                  "name": "name",
                  "type": "string"
                },
                {
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "bid",
              "outputs": [
                {
                  "name": "success",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "_currencySymbol",
                  "type": "bytes32"
                },
                {
                  "name": "_borrowerId",
                  "type": "bytes32"
                },
                {
                  "name": "_invoiceId",
                  "type": "bytes32"
                },
                {
                  "name": "_invoiceNumber",
                  "type": "string"
                },
                {
                  "name": "_invoiceAmount",
                  "type": "uint256"
                },
                {
                  "name": "_fundingGoal",
                  "type": "uint256"
                },
                {
                  "name": "_platformTaxPercent",
                  "type": "uint256"
                },
                {
                  "name": "_signedDocumentIPFSHash",
                  "type": "string"
                }
              ],
              "name": "createCrowdsale",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "clientId",
                  "type": "bytes32"
                },
                {
                  "name": "tokenContract",
                  "type": "address"
                },
                {
                  "name": "releaseCurrency",
                  "type": "bytes32"
                },
                {
                  "name": "receiver",
                  "type": "address"
                },
                {
                  "name": "depositIndex",
                  "type": "uint256"
                }
              ],
              "name": "releaseDeposit",
              "outputs": [
                {
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "name": "currency",
                  "type": "bytes32"
                }
              ],
              "name": "getCurrency",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "destroyTokens",
              "outputs": [
                {
                  "name": "success",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "name": "clientExternal",
                  "type": "address"
                },
                {
                  "name": "clientId",
                  "type": "bytes32"
                },
                {
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "AM",
              "outputs": [
                {
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "name": "_accessManager",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "tokenName",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "decimalUnits",
                  "type": "uint8"
                },
                {
                  "indexed": false,
                  "name": "tokenSymbol",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "addr",
                  "type": "address"
                }
              ],
              "name": "EventNewCurrency",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "EventMintTokens",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "EventDestroyTokens",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "fromId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "toId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "EventInternalTransfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "clientId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "EventWithdrawal",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "clientId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "EventDeposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "crowdsale",
                  "type": "address"
                }
              ],
              "name": "EventNewCrowdsale",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "crowdsaleAddr",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "borrowerId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "EventBeneficiaryFunded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "crowdsaleAddr",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "groupIndex",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "name": "bidderId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "EventLosingGroupBidderRefunded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "crowdsaleAddr",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "EventPaymentReceived",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "crowdsaleAddr",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "groupIndex",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "name": "bidderId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "currency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "bidAmount",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "name": "benefitsAmount",
                  "type": "uint256"
                }
              ],
              "name": "EventWinnerGroupBidderFunded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "clientId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "depositContractAddress",
                  "type": "address"
                }
              ],
              "name": "EventNewDepositContract",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "clientId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "tokenContract",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "receiveCurrency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "deposited",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "name": "received",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "name": "depositIndex",
                  "type": "uint256"
                }
              ],
              "name": "EventNewDeposit",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "name": "clientId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "tokenContract",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "name": "releaseCurrency",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "name": "deposited",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "name": "received",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "name": "depositIndex",
                  "type": "uint256"
                }
              ],
              "name": "EventDepositReleased",
              "type": "event"
            }
          ],
        address: "0xefbf878eb12a79f11e8d3076ef4c228aa3e0a08d"
    }
}