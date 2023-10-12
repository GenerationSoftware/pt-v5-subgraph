import { ClaimedPrize, DrawAwarded } from '../../generated/PrizePool/PrizePool';

import { createPrizeClaim } from '../helpers/prizePool/prizeClaim';
import { createDraw } from '../helpers/draw/loadOrCreateDraw';

export function handleClaimedPrize(event: ClaimedPrize): void {
  const vault = event.params.vault;
  const winner = event.params.winner;
  const recipient = event.params.recipient;

  const drawId = event.params.drawId;
  const tier = event.params.tier;
  const prizeIndex = event.params.prizeIndex;

  const payout = event.params.payout;
  const fee = event.params.fee;
  const feeRecipient = event.params.feeRecipient;

  const timestamp = event.block.timestamp;
  const txHash = event.transaction.hash;

  createPrizeClaim(
    vault,
    winner,
    recipient,
    drawId,
    tier,
    prizeIndex,
    payout,
    fee,
    feeRecipient,
    timestamp,
    txHash,
  );
}

export function handleDrawAwarded(event: DrawAwarded): void {
  const drawId = event.params.drawId;
  const winningRandomNumber = event.params.winningRandomNumber;
  const numTiers = event.params.numTiers;
  const lastNumTiers = event.params.lastNumTiers;
  const reserve = event.params.reserve;
  const prizeTokensPerShare = event.params.prizeTokensPerShare;
  const drawOpenedAt = event.params.drawOpenedAt;

  const timestamp = event.block.timestamp;
  const txHash = event.transaction.hash;

  createDraw(
    drawId,
    winningRandomNumber,
    numTiers,
    lastNumTiers,
    reserve,
    prizeTokensPerShare,
    drawOpenedAt,
    timestamp,
    txHash,
  );
}
