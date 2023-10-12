import { BigInt, Bytes } from '@graphprotocol/graph-ts';

import { RngAuction } from '../../../generated/schema';

export const createRngAuction = (
  id: Bytes,
  sender: Bytes,
  recipient: Bytes,
  sequenceId: BigInt,
  rng: Bytes,
  rngRequestId: BigInt,
  elapsedTime: BigInt,
  rewardFraction: BigInt,
  timestamp: BigInt,
  txHash: Bytes,
  gasUsed: BigInt,
): RngAuction => {
  const rngAuction = new RngAuction(id);

  rngAuction.sender = sender;
  rngAuction.recipient = recipient;
  rngAuction.sequenceId = sequenceId;
  rngAuction.rng = rng;
  rngAuction.rngRequestId = rngRequestId;
  rngAuction.elapsedTime = elapsedTime;
  rngAuction.rewardFraction = rewardFraction;
  rngAuction.gasUsed = gasUsed;
  rngAuction.timestamp = timestamp;
  rngAuction.txHash = txHash;
  rngAuction.save();

  return rngAuction;
};
