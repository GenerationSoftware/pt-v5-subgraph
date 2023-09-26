import { BigInt, ethereum, crypto, Bytes } from '@graphprotocol/graph-ts';

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const ZERO = BigInt.fromI32(0);
export const ONE = BigInt.fromI32(1);

export const generateHashId = (...keys: Bytes[]): Bytes => {
  let concatenated = new Bytes(0);
  for (let i = 0; i < keys.length; i++) {
    concatenated = concatenated.concat(keys[i]);
  }
  return crypto.keccak256(concatenated);
};

export const generateUniqueLogId = (event: ethereum.Event): Bytes => generateHashId(event.transaction.hash, Bytes.fromBigInt(event.logIndex));