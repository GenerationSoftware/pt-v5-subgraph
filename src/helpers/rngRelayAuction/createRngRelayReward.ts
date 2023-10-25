import { BigInt, Bytes } from '@graphprotocol/graph-ts';

import { RngRelayReward } from '../../../generated/schema';

export const createRngRelayReward = (
  id: Bytes,
  recipient: Bytes,
  reward: BigInt,
  timestamp: BigInt,
  txHash: Bytes,
  gasUsed: BigInt,
): RngRelayReward => {
  const rngRelayReward = new RngRelayReward(id);

  rngRelayReward.recipient = recipient;
  rngRelayReward.reward = reward;
  rngRelayReward.gasUsed = gasUsed;
  rngRelayReward.timestamp = timestamp;
  rngRelayReward.txHash = txHash;
  rngRelayReward.save();

  return rngRelayReward;
};
