import { BigInt, Bytes } from '@graphprotocol/graph-ts';

import { RngRelay } from '../../../generated/schema';

export const createRngRelay = (
  id: Bytes,
  from: Bytes,
  messageDispatcher: Bytes,
  remoteOwnerChainId: BigInt,
  remoteOwner: Bytes,
  remoteRngAuctionRelayListener: Bytes,
  rewardRecipient: Bytes,
  messageId: Bytes,
  timestamp: BigInt,
  txHash: Bytes,
  gasUsed: BigInt,
): RngRelay => {
  const rngRelay = new RngRelay(id);

  rngRelay.from = from;
  rngRelay.messageDispatcher = messageDispatcher;
  rngRelay.remoteOwnerChainId = remoteOwnerChainId;
  rngRelay.remoteOwner = remoteOwner;
  rngRelay.remoteRngAuctionRelayListener = remoteRngAuctionRelayListener;
  rngRelay.rewardRecipient = rewardRecipient;
  rngRelay.messageId = messageId;
  rngRelay.gasUsed = gasUsed;
  rngRelay.timestamp = timestamp;
  rngRelay.txHash = txHash;
  rngRelay.save();

  return rngRelay;
};
