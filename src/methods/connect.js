import Web3 from 'web3';

/**
 * standard web3 HTTP connection. Connects to a network or returns an already existing network.
 *
 * @param  network network settings { address: '', port: ''}
 * @return      an instance of Web3.
 */

export function connect(network) {
  let web3;

  if (network.protocol === 'http') {
    web3 = new Web3(new Web3.providers.HttpProvider(`http://${network.address}:${network.port}`));
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.WebsocketProvider(network.protocol + `://${network.address}:${network.port}`));
  }

  return web3;
}
