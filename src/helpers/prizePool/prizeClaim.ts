import { Bytes, BigInt, Address } from '@graphprotocol/graph-ts';

import { PrizeClaim } from '../../../generated/schema';
import { loadDraw } from '../draw/loadOrCreateDraw';
import { loadOrCreateVault } from '../vault/loadOrCreateVault';
import { loadOrCreateAccount } from '../account/loadOrCreateAccount';
import { generateHashId } from '../common';

export const createPrizeClaim = (
  vaultId: Address,
  winnerId: Address,
  recipientId: Address,
  drawId: i32,
  tier: i32,
  prizeIndex: BigInt,
  payout: BigInt,
  fee: BigInt,
  feeRecipientId: Bytes,
  timestamp: BigInt,
  txHash: Bytes,
  gasUsed: BigInt,
): PrizeClaim => {
  const prizeClaimId = generateHashId([
    vaultId,
    winnerId,
    recipientId,
    Bytes.fromI32(drawId),
    Bytes.fromI32(tier),
    Bytes.fromI32(prizeIndex.toI32()),
  ]);

  // Ensure other entities are initialized
  loadDraw(drawId);
  loadOrCreateVault(vaultId);
  loadOrCreateAccount(vaultId, winnerId);
  loadOrCreateAccount(vaultId, recipientId);
  loadOrCreateAccount(vaultId, feeRecipientId);

  // Initialize PrizeClaim entity
  const prizeClaim = new PrizeClaim(prizeClaimId);
  prizeClaim.vault = vaultId;
  prizeClaim.winner = winnerId;
  prizeClaim.recipient = recipientId;
  prizeClaim.draw = Bytes.fromI32(drawId);
  prizeClaim.tier = tier;
  prizeClaim.prizeIndex = prizeIndex;
  prizeClaim.payout = payout;
  prizeClaim.fee = fee;
  prizeClaim.feeRecipient = feeRecipientId;
  prizeClaim.timestamp = timestamp;
  prizeClaim.txHash = txHash;
  prizeClaim.gasUsed = gasUsed;

  // Save PrizeClaim entity
  prizeClaim.save();

  return prizeClaim;
};
