import Web3 from 'web3';

/**
 * standard web3 HTTP connection. Connects to a network or returns an already existing network.
 * 
 * @param  netwrok network settings { address: '', port: ''}
 * @return      an instance of Web3.
 */
module.exports = {
    connect: (network) => {
        if (typeof web3 !== 'undefined') {
            var web3 = new Web3(web3.currentProvider);
          } else {
            // set the provider you want from Web3.providers
            var web3 = new Web3(new Web3.providers.WebsocketProvider(`ws://${network.address}:${network.port}`));
        }

        return web3;

    }
}