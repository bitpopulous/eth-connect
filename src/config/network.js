export default {
  ropsten: {
    address: process.env.ETH_HOST || 'beta.populous.co',
    port: process.env.ETH_PORT || '8383',
    protocol: process.env.ETH_PROTOCOL || 'wss',
    ethAddress: process.env.ETH_ADDRESS || '0xdb09c99a80254e6821640b8a5c21c7366cf8ff35',
    ethAddressPassword: process.env.ETH_ADDRESS_PASSWORD || 'Emirates1',
  },

  live: {
    address: '',
    port: '',
  },
};
