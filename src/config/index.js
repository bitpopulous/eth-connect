import './dotenvConfig';
import networks from './network.js';
import contracts from './contract';


export const network = networks;
export const contract = contracts;

export default {
    network: networks,
    contract: contracts
}