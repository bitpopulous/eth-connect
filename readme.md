### Instructions

- clone this repo
- clone smartcontracts repo
- go to `eth-connect` directory: `$ cd eth-connect`
- export env variables with command

    `export ETH_COMM_RCP_URL=ws://35.177.79.70:8546 ETH_COMM_LOCAL_ADDRESS=0xdb09c99a80254e6821640b8a5c21c7366cf8ff35 ETH_COMM_LOCAL_ADDRESS_PASSWORD=Emirates1`
- run `npm i`, after install object tests will be run
- run `npm run test-api` - for test reference methods

**Notice: test can be failed because: you dont have enough gas or not export env variables**

### Directory structure:
- api - hold all methods for interact with smart contracts, test for this methods and helpers
- helpers - hold helpers function
  - get-random-contract-name.js - function for test function that implement logic for interact with ethComm, probably need to move in other place
  - get-value-from-tx.js - help to get value from contracts response event object, need to add ability to get all event data
- methods - holds all object methods, can be placed in one file, but separate files much easy for maintenance
- testsCommon - function for test like createCurrencyTest
  - create-currency-test.js - function create new currency or return existing, should be use only for tests purpose because
    violates the one of SOLID principle
- constants.js - holds some constant values that can be returned from smart contracts
- EthConnect.js - defines class with constructor and methods assign to it

Why we should use object?

- it prevent code duplicate and help to write code faster

### Need to implement

- ability to work with testrpc, network doesn't need unlock account and use http web3 provider
- ability to get all event Data, get-value-from-tx.js fix
- probably some directory structure fixes
- ability to connect to http web3 provider
- probably need some wiki
- maybe add dotenv for easy work

### Examples:

Create Eth Connect Instance, expect that smart contracts repo cloned near current on one directory level:

-> in this case object will try to get config from environment variables

-> for export variables you can use dotenv or this command, values are dummy

-> `export ETH_COMM_RCP_URL=ws://localhost:8546 0x24jky5i734i53k4h5i34u53kj45b ETH_COMM_LOCAL_ADDRESS_PASSWORD=password`

`const ethInst = new EthConnect();`

-> in this case object will use provided config, if something missed, it will fallback to environment variables

```
const ethInst = new EthConnect({
   ethRPCURL: 'ws://localhost:8546', // dummy for example
      localAddress = '0x24jky5i734i53k4h5i34u53kj45b', // dummy for example
      localAddressPassword = 'password', // dummy for example
});
```

All method for interact with smart contracts available under 'api' name space

`ethInst.api.populous.getCurrency('EUR')`

return `0x7f62B3960D54abE0D161201bb361Ed5F8e419CbB` or throw error


