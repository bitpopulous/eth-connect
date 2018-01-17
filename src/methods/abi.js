import SHA256 from 'crypto-js/sha256';
import ethers from 'ethers';

export function encode(data, values) {
  const Interface = ethers.Interface;
  return Interface.encodeParams(data, values);
}

export function encrypt(data) {
  return SHA256(data).toString();
}
