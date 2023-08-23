import { BigInt, ethereum } from '@graphprotocol/graph-ts';

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const ZERO = BigInt.fromI32(0);
export const ONE = BigInt.fromI32(1);

export const generateCompositeId = (...keys: string[]): string => keys.join("-");
export const generateUniqueLogId = (event: ethereum.Event): string => generateCompositeId(event.transaction.hash.toHex(), event.logIndex.toString());