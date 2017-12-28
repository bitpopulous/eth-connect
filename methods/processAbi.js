module.exports = {
    process: (connect, contract, address) => {
        return new Promise((resolve, reject) => {
        	if (!address) {
        		address = contract.address;
        	}
        	var abi = new connect.eth.Contract(contract.abi, address);
            resolve(abi);
        })
    }
}