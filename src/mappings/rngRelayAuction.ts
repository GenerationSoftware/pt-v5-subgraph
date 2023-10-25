import { AuctionRewardAllocated } from '../../generated/RngRelayAuction/RngRelayAuction';

import { createRngRelayReward } from '../helpers/rngRelayAuction/createRngRelayReward';
import { generateUniqueLogId } from '../helpers/common';

export function handleAuctionRewardAllocated(event: AuctionRewardAllocated): void {
  const id = generateUniqueLogId(event);

  const recipient = event.params.recipient;
  const reward = event.params.reward;

  const gasUsed = event.receipt!.gasUsed;

  const timestamp = event.block.timestamp;
  const txHash = event.transaction.hash;

  createRngRelayReward(id, recipient, reward, timestamp, txHash, gasUsed);
}
