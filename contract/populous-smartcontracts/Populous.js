import constatns from '../constants';

export default {
    Populous: (connect, contract, from, accessManager) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            accessManager: accessManager
        };
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.Populous(...Object.values(params)).send({
                from: from,
                gas: limit
            });
        });
    },
    setCM: (connect, contract, from, crowdsaleManager) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleManager: crowdsaleManager
        };
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.setCM(...Object.values(params)).send({
                from: from, 
                gas: limit 
            });
        });
    },
    setDCM: (connect, contract, from, depositContractsManager) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            depositContractsManager: depositContractsManager
        };
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.setDCM(...Object.values(params)).send({ 
                from: from, 
                gas: limit 
            });
        });
    },
    createCurrency: (connect, contract, from, tokenName, decimalUnits, tokenSymbol) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            tokenName: connect.utils.asciiToHex(tokenName),
            decimalUnits: decimalUnits,
            tokenSymbol: connect.utils.asciiToHex(tokenSymbol)
        }

       return contract.transaction.gasLimit(connect)
         .then(limit => {
            return contractInstance.methods.createCurrency(...Object.values(params)).send({ 
                from: from, 
                gas: limit 
            });
        })

    },
    tokenFallback: (connect, contract, from, amount, data) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            from: from,
            amount: amount,
            data: connect.utils.asciiToHex(data)
        }
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.tokenFallback(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    withdraw: (connect, contract, from, clientExternal, clientId, currency, amount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            clientExternal: clientExternal,
            clientId: connect.utils.asciiToHex(clientId),
            currency: connect.utils.asciiToHex(currency),
            amount: amount
        }
        return contract.transaction.gasLimit(connect)
          .then(limit => contractInstance.methods.withdraw(...Object.values(params)).send({
            from: from,
            gas: limit,
          }));
    },
    mintTokens: (connect, contract, from, currency, amount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: connect.utils.asciiToHex(currency),
            amount: amount
        };

      return contract.transaction.gasLimit(connect)
        .then(limit =>
          contractInstance.methods
          .mintTokens(...Object.values(params))
          .send({from: from, gas: limit,})
        )
        .then((mintTokensResult) => {
          if (mintTokensResult.status === constatns.statusMap.fail) {
            throw new Error('Failed transaction');
          }
        });

    },
    destroyTokens: (connect, contract, from, currency, amount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: connect.utils.asciiToHex(currency),
            amount: amount
        }
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.destroyTokens(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    transfer: (connect, contract, from, currency, fromID, toID, amount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: connect.utils.asciiToHex(currency),
            fromID: connect.utils.asciiToHex(fromID),
            toID: connect.utils.asciiToHex(toID),
            amount: amount
        }
      return contract.transaction.gasLimit(connect)
        .then(limit => contractInstance.methods.transfer(...Object.values(params))
          .send({
            from: from,
            gas: limit,
          })
        );
    },
    getLedgerEntry: (connect, contract, from, currency, accountId) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: connect.utils.asciiToHex(currency),
            accountId: connect.utils.asciiToHex(accountId)
        };

        return contractInstance.methods.getLedgerEntry(...Object.values(params))
          .call({ from: from })
          .then((ledgerAmount) => {
            if (typeof result === 'object') {
              throw new Error('Failed transaction');
            }

            return Number.parseFloat(ledgerAmount);
          });
    },
    getCurrency: (connect, contract, from, currency) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: connect.utils.asciiToHex(currency)
        };
        return contractInstance.methods.getCurrency(...Object.values(params)).call({
            from: from
        });
    },
    getCurrencySymbol: (connect, contract, from, currency) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: currency
        };
        return contractInstance.methods.getCurrencySymbol(...Object.values(params)).call({
            from: from
        });
    },
    createCrowdsale: (connect, contract, from, currencySymbol, borrowerId, invoiceId, invoiceNumber, invoiceAmount, fundingGoal, platformTaxPercent, signedDocumentIPFSHash) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currencySymbol: connect.utils.asciiToHex(currencySymbol),
            borrowerId: connect.utils.asciiToHex(borrowerId),
            invoiceId: connect.utils.asciiToHex(invoiceId),
            invoiceNumber: invoiceNumber,
            invoiceAmount: invoiceAmount,
            fundingGoal: fundingGoal,
            platformTaxPercent: platformTaxPercent,
            signedDocumentIPFSHash: signedDocumentIPFSHash
        }
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.createCrowdsale(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    closeCrowdsale: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr
        };
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.closeCrowdsale(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    bid: (connect, contract, from, crowdsaleAddr, groupIndex, bidderId, name, value) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr,
            groupIndex: groupIndex,
            bidderId: connect.utils.asciiToHex(bidderId),
            name: name,
            value: value
        }
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.bid(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    initialBid: (connect, contract, from, crowdsaleAddr, groupName, goal, bidderId, name, value) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr,
            groupName: groupName,
            goal: goal,
            bidderId: connect.utils.asciiToHex(bidderId),
            name: name,
            value: value
        }
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.initialBid(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    fundBeneficiary: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr
        };
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.fundBeneficiary(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    refundLosingGroups: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr
        };
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.refundLosingGroups(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    refundLosingGroupBidder: (connect, contract, from, crowdsaleAddr, groupIndex, bidderIndex) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr,
            groupIndex: groupIndex,
            bidderIndex: bidderIndex
        }
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.refundLosingGroupBidder(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    invoicePaymentReceived: (connect, contract, from, crowdsaleAddr, paidAmount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr,
            paidAmount: paidAmount
        }
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.invoicePaymentReceived(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    fundWinnerGroup: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr
        };
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.fundWinnerGroup(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    fundWinnerGroupBidder: (connect, contract, from, crowdsaleAddr, bidderIndex) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr,
            bidderIndex: bidderIndex
        };
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.fundWinnerGroupBidder(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    createDepositContract: (connect, contract, from, clientId) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            clientId: connect.utils.asciiToHex(clientId)
        }
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.createDepositContract(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    deposit: (connect, contract, from, clientId, tokenContract, receiveCurrency, depositAmount, receiveAmount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            clientId: connect.utils.asciiToHex(clientId),
            tokenContract: tokenContract,
            receiveCurrency: connect.utils.asciiToHex(receiveCurrency),
            depositAmount: depositAmount,
            receiveAmount: receiveAmount
        }
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.deposit(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    },
    releaseDeposit: (connect, contract, from, clientId, tokenContract, releaseCurrency, receiver, depositIndex) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            clientId: connect.utils.asciiToHex(clientId),
            tokenContract: tokenContract,
            releaseCurrency: connect.utils.asciiToHex(releaseCurrency),
            receiver: receiver,
            depositIndex: depositIndex
        }
        return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.releaseDeposit(...Object.values(params)).send({
                from: from, 
                gas: limit
            });
        });
    }
}