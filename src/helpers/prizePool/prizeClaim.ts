import { Bytes, BigInt, Address } from '@graphprotocol/graph-ts';

import { PrizeClaim } from '../../../generated/schema';
import { loadDraw } from '../draw/loadOrCreateDraw';
import { loadOrCreatePrizeVault } from '../prizeVault/loadOrCreatePrizeVault';
import { loadOrCreateAccount } from '../account/loadOrCreateAccount';
import { generateHashId } from '../common';

export const createPrizeClaim = (
  prizeVaultId: Address,
  winnerId: Address,
  recipientId: Address,
  drawId: i32,
  tier: i32,
  prizeIndex: BigInt,
  payout: BigInt,
  claimReward: BigInt,
  claimRewardRecipientId: Bytes,
  block: BigInt,
  timestamp: BigInt,
  txHash: Bytes,
  gasUsed: BigInt,
): PrizeClaim => {
  const prizeClaimId = generateHashId([
    prizeVaultId,
    winnerId,
    recipientId,
    Bytes.fromI32(drawId),
    Bytes.fromI32(tier),
    Bytes.fromI32(prizeIndex.toI32()),
  ]);

  // Ensure other entities are initialized
  loadDraw(drawId);
  loadOrCreatePrizeVault(prizeVaultId);
  loadOrCreateAccount(prizeVaultId, winnerId);
  loadOrCreateAccount(prizeVaultId, recipientId);
  loadOrCreateAccount(prizeVaultId, claimRewardRecipientId);

  // Initialize PrizeClaim entity
  const prizeClaim = new PrizeClaim(prizeClaimId);
  prizeClaim.prizeVault = prizeVaultId;
  prizeClaim.winner = winnerId;
  prizeClaim.recipient = recipientId;
  prizeClaim.draw = Bytes.fromI32(drawId);
  prizeClaim.tier = tier;
  prizeClaim.prizeIndex = prizeIndex;
  prizeClaim.payout = payout;
  prizeClaim.claimReward = claimReward;
  prizeClaim.claimRewardRecipient = claimRewardRecipientId;
  prizeClaim.block = block;
  prizeClaim.timestamp = timestamp;
  prizeClaim.txHash = txHash;
  prizeClaim.gasUsed = gasUsed;

  // Save PrizeClaim entity
  prizeClaim.save();

  return prizeClaim;
};
