export default {
    Populous (connect, contract, from, accessManager) {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        return contractInstance.methods.Populous(accessManager).send({ from: from });
    },
    getCurrency (connect, contract, from, currency) {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = { 
            currency: connect.utils.asciiToHex(currency) 
        };

        return contractInstance.methods.getCurrency(...Object.values(params)).call({ from: from });
    },
    getCurrencySymbol (connect, contract, from, currency) {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        return contractInstance.methods.getCurrencySymbol(currency).call({ from: from });
    },
    getLedgerEntry (connect, contract, from, currency, accountId) {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            currency: connect.utils.asciiToHex(currency),
            accountId: connect.utils.asciiToHex(accountId)
        }

        return contractInstance.methods.getLedgerEntry(...Object.values(params)).call({ from: from });
    },
    transfer (connect, contract, from, to, currency, amount) {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        //anything that takes bytes or bytes1-32, is converted to buff.
        const params = {
            currency: connect.utils.asciiToHex(currency),
            from: connect.utils.asciiToHex(from),
            to: connect.utils.asciiToHex(to),
            amount: amount
        }

        return contractInstance.methods.transfer(...Object.values(params)).send({ from: from });
    },
    destroyTokens: (connect, contract, from currency, amount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            currency: connect.utils.asciiToHex(currency),
            amount: amount
        }

        return contractInstance.methods.destroyTokens(...Object.values(params)).send({ from: from });
    },
    mintTokens: (connect, contract, from, currency, amount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            currency: connect.utils.asciiToHex(currency),
            amount: amount
        }

        return contractInstance.methods.mintTokens(...Object.values(params)).send({ from: from });
    },
    createCurrency: (connect, contract, from, tokenName, decimalUnits, tokenSymbol) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            tokenName: connect.utils.asciiToHex(tokenName),
            decimalUnits: decimalUnits,
            tokenSymbol: connect.utils.asciiToHex(tokenSymbol)
        }

        return contractInstance.methods.createCurrency(...Object.values(params)).send({ from: from });
    },
    tokenFallback: (connect, contract, from, amount, data) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            from: from,
            amount: amount,
            data: connect.utils.asciiToHex(data)
        }

        return contractInstance.methods.tokenFallback(...Object.values(params)).send({ from: from });
    },
    withdraw: (connect, contract, from, clientExternal, clientId, currency, amount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            clientExternal: clientExternal,
            clientId: connect.utils.asciiToHex(clientId),
            currency: connect.utils.asciiToHex(currency),
            amount: amount
        }

        return contractInstance.methods.withdraw(...Object.values(params)).send({ from: from });
    },
    setCM: (connect, contract, from, crowdsaleManager) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        return contractInstance.methods.setCM(crowdsaleManager).send({ from: from });
    },
    setDCM: (connect, contract, from, depositContractsManager) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        return contractInstance.methods.setDCM(depositContractsManager).send({ from: from });
    },
    createCrowdsale: (connect, contract, from, currencySymbol, borrowerId, invoiceId, invoiceNumber, invoiceAmount, fundingGoal, platformTaxPercent, signedDocumentIPFSHash) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            currencySymbol: connect.utils.asciiToHex(currencySymbol),
            borrowerId: connect.utils.asciiToHex(borrowerId),
            invoiceId: connect.utils.asciiToHex(invoiceId),
            invoiceNumber: connect.utils.asciiToHex(invoiceNumber),
            invoiceAmount: invoiceAmount,
            fundingGoal: fundingGoal,
            platformTaxPercent: platformTaxPercent,
            signedDocumentIPFSHash: connect.utils.asciiToHex(invoiceNumber)
        }

        return contractInstance.methods.createCrowdsale(...Object.values(params)).send({ from: from });
    },
    closeCrowdsale: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        return contractInstance.methods.closeCrowdsale(crowdsaleAddr).send({ from: from });
    },
    bid: (connect, contract, from, crowdsaleAddr, groupIndex, bidderId, name, value) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            crowdsaleAddr: crowdsaleAddr,
            groupIndex: groupIndex,
            bidderId: connect.utils.asciiToHex(bidderId),
            name: connect.utils.asciiToHex(name),
            value: value
        }

        return contractInstance.methods.bid(...Object.values(params)).send({ from: from });
    },
    initialBid: (connect, contract, from, crowdsaleAddr, groupName, goal, bidderId, name, value) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            crowdsaleAddr: crowdsaleAddr,
            groupName: connect.utils.asciiToHex(groupName),
            goal: goal,
            bidderId: connect.utils.asciiToHex(bidderId),
            name: connect.utils.asciiToHex(name),
            value: value
        }

        return contractInstance.methods.initialBid(...Object.values(params)).send({ from: from });
    },
    fundBeneficiary: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        return contractInstance.methods.fundBeneficiary(crowdsaleAddr).send({ from: from });
    },
    refundLosingGroups: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        return contractInstance.methods.refundLosingGroups(crowdsaleAddr).send({ from: from });
    },
    refundLosingGroupBidder: (connect, contract, from, crowdsaleAddr, groupIndex, bidderIndex) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            crowdsaleAddr: crowdsaleAddr,
            groupIndex: groupIndex,
            bidderIndex: bidderIndex
        }

        return contractInstance.methods.refundLosingGroupBidder(...Object.values(params)).send({ from: from });
    },
    invoicePaymentReceived: (connect, contract, from, crowdsaleAddr, paidAmount) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            crowdsaleAddr: crowdsaleAddr,
            paidAmount: paidAmount
        }

        return contractInstance.methods.invoicePaymentReceived(...Object.values(params)).send({ from: from });
    },
    fundWinnerGroup: (connect, contract, from, crowdsaleAddr) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        return contractInstance.methods.fundWinnerGroup(crowdsaleAddr).send({ from: from });
    },
    fundWinnerGroupBidder: (connect, contract, from, crowdsaleAddr, bidderIndex) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        return contractInstance.methods.fundWinnerGroupBidder(crowdsaleAddr, bidderIndex).send({ from: from });
    },
    createDepositContract: (connect, contract, from, clientId) => {
        const contractInstance = new connect.eth.Contract(contract.abi, contract.address);

        const params = {
            clientId: connect.utils.asciiToHex(clientId)
        }

        return contractInstance.methods.createDepositContract(...Object.values(params)).send({ from: from });
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

        return contractInstance.methods.deposit(...Object.values(params)).send({ from: from });
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

        return contractInstance.methods.releaseDeposit(...Object.values(params)).send({ from: from });
    }
}