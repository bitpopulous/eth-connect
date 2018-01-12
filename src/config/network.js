export default {
  ropsten: {
    address: process.env.ETH_HOST || '35.177.79.70',
    port: process.env.ETH_PORT || '8546',
    protocol: process.env.ETH_PROTOCOL || 'ws',
    ethAddress: process.env.ETH_ADDRESS || '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35',
    ethAddressPassword: process.env.ETH_ADDRESS_PASSWORD || 'Emirates1',
  },

  live: {
    address: '',
    port: '',
  },
};
