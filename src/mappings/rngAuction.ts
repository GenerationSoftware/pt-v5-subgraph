import { BigInt, ethereum } from '@graphprotocol/graph-ts';

import { RngAuctionCompleted } from '../../generated/RngAuction/RngAuction';

import { createRngAuction } from '../helpers/rngAuction/createRngAuction';
import { generateUniqueLogId } from '../helpers/common';

export function handleRngAuctionCompleted(event: RngAuctionCompleted): void {
  const id = generateUniqueLogId(event);

  const sender = event.params.sender;
  const recipient = event.params.recipient;
  const sequenceId = event.params.sequenceId;
  const rng = event.params.rng;

  const rngRequestId = event.params.rngRequestId;
  const elapsedTime = event.params.elapsedTime;
  const rewardFraction = event.params.rewardFraction;

  const gasUsed = event.receipt!.gasUsed;

  const timestamp = event.block.timestamp;
  const txHash = event.transaction.hash;

  createRngAuction(
    id,
    sender,
    recipient,
    sequenceId,
    rng,
    rngRequestId,
    elapsedTime,
    rewardFraction,
    timestamp,
    txHash,
    gasUsed,
  );
}
