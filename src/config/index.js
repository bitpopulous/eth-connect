import './dotenvConfig';
import networks from './network';
import contracts from './contract';


export const network = networks;
export const contract = contracts;

export default {
  network: networks,
  contract: contracts,
};
