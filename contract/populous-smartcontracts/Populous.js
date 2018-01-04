export default {
    Populous(connect, contract, from, accessManager) {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            accessManager: accessManager
        };
        return contractInstance.methods.Populous(...Object.values(params)).send({
            from: from
        });
    },
    setCM: (connect, contract, from, crowdsaleManager) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleManager: crowdsaleManager
        };
        return contractInstance.methods.setCM(...Object.values(params)).send({
            from: from
        });
    },
    setDCM: (connect, contract, from, depositContractsManager) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            depositContractsManager: depositContractsManager
        };
        return contractInstance.methods.setDCM(...Object.values(params)).send({
            from: from
        });
    },
    createCurrency: (connect, contract, from, tokenName, decimalUnits, tokenSymbol) => {
        console.log('1')
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            tokenName: connect.utils.asciiToHex(tokenName),
            decimalUnits: decimalUnits,
            tokenSymbol: connect.utils.asciiToHex(tokenSymbol)
        }

       return contract.transaction.gasLimit(connect).then(limit => {
            return contractInstance.methods.createCurrency(...Object.values(params)).send({ from: from, gas: limit });
        })
     
    },
    tokenFallback: (connect, contract, from, amount, data) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            from: from,
            amount: amount,
            data: connect.utils.asciiToHex(data)
        }
        return contractInstance.methods.tokenFallback(...Object.values(params)).send({
            from: from
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
        return contractInstance.methods.withdraw(...Object.values(params)).send({
            from: from
        });
    },
    mintTokens: (connect, contract, from, currency, amount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: connect.utils.asciiToHex(currency),
            amount: amount
        }
        return contractInstance.methods.mintTokens(...Object.values(params)).send({
            from: from
        });
    },
    destroyTokens: (connect, contract, from, currency, amount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: connect.utils.asciiToHex(currency),
            amount: amount
        }
        return contractInstance.methods.destroyTokens(...Object.values(params)).send({
            from: from
        });
    },
    transfer(connect, contract, from, currency, fromID, toID, amount) {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: connect.utils.asciiToHex(currency),
            fromID: connect.utils.asciiToHex(fromID),
            toID: connect.utils.asciiToHex(toID),
            amount: amount
        }
        return contractInstance.methods.transfer(...Object.values(params)).send({
            from: from
        });
    },
    getLedgerEntry(connect, contract, from, currency, accountId) {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: connect.utils.asciiToHex(currency),
            accountId: connect.utils.asciiToHex(accountId)
        }
        return contractInstance.methods.getLedgerEntry(...Object.values(params)).call({
            from: from
        });
    },
    getCurrency(connect, contract, from, currency) {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            currency: connect.utils.asciiToHex(currency)
        };
        return contractInstance.methods.getCurrency(...Object.values(params)).call({
            from: from
        });
    },
    getCurrencySymbol(connect, contract, from, currency) {
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
        return contractInstance.methods.createCrowdsale(...Object.values(params)).send({
            from: from
        });
    },
    closeCrowdsale: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr
        };
        return contractInstance.methods.closeCrowdsale(...Object.values(params)).send({
            from: from
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
        return contractInstance.methods.bid(...Object.values(params)).send({
            from: from
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
        return contractInstance.methods.initialBid(...Object.values(params)).send({
            from: from
        });
    },
    fundBeneficiary: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr
        };
        return contractInstance.methods.fundBeneficiary(...Object.values(params)).send({
            from: from
        });
    },
    refundLosingGroups: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr
        };
        return contractInstance.methods.refundLosingGroups(...Object.values(params)).send({
            from: from
        });
    },
    refundLosingGroupBidder: (connect, contract, from, crowdsaleAddr, groupIndex, bidderIndex) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr,
            groupIndex: groupIndex,
            bidderIndex: bidderIndex
        }
        return contractInstance.methods.refundLosingGroupBidder(...Object.values(params)).send({
            from: from
        });
    },
    invoicePaymentReceived: (connect, contract, from, crowdsaleAddr, paidAmount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr,
            paidAmount: paidAmount
        }
        return contractInstance.methods.invoicePaymentReceived(...Object.values(params)).send({
            from: from
        });
    },
    fundWinnerGroup: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr
        };
        return contractInstance.methods.fundWinnerGroup(...Object.values(params)).send({
            from: from
        });
    },
    fundWinnerGroupBidder: (connect, contract, from, crowdsaleAddr, bidderIndex) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            crowdsaleAddr: crowdsaleAddr,
            bidderIndex: bidderIndex
        };
        return contractInstance.methods.fundWinnerGroupBidder(...Object.values(params)).send({
            from: from
        });
    },
    createDepositContract: (connect, contract, from, clientId) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);
        const params = {
            clientId: connect.utils.asciiToHex(clientId)
        }
        return contractInstance.methods.createDepositContract(...Object.values(params)).send({
            from: from
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
        return contractInstance.methods.deposit(...Object.values(params)).send({
            from: from
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
        return contractInstance.methods.releaseDeposit(...Object.values(params)).send({
            from: from
        });
    }
}