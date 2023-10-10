import { Bytes, BigInt, Address } from '@graphprotocol/graph-ts';

import { PrizeClaim } from '../../../generated/schema';
import { loadOrCreateDraw } from './draw';
import { loadOrCreateVault } from './vault';
import { loadOrCreateAccount } from './account';
import { generateHashId } from '../common';

// Generate ID for PrizeClaim entity
export const generateCompositePrizeClaimId = (
  _vaultId: string,
  _winnerId: string,
  _recipientId: string,
  _drawId: string,
  _tier: string,
  _prizeIndex: string,
): string => generateHashId(_vaultId, _winnerId, _recipientId, _drawId, _tier, _prizeIndex);

export const createPrizeClaim = (
  _vaultId: Address,
  _winnerId: Address,
  _recipientId: Address,
  _drawId: i32,
  _tier: i32,
  _prizeIndex: BigInt,
  _payout: BigInt,
  _fee: BigInt,
  _feeRecipientId: Bytes,
  _timestamp: BigInt,
): PrizeClaim => {
  const prizeClaimId = generateCompositePrizeClaimId(
    _vaultId.toHexString(),
    _winnerId.toHexString(),
    _recipientId.toHexString(),
    _drawId.toString(),
    _tier.toString(),
    _prizeIndex.toString(),
  );

  // Ensure other entities are initialized
  loadOrCreateDraw(_drawId);
  loadOrCreateVault(_vaultId);
  loadOrCreateAccount(_winnerId);
  loadOrCreateAccount(_recipientId);
  loadOrCreateAccount(_feeRecipientId);

  // Initialize PrizeClaim entity
  const prizeClaim = new PrizeClaim(prizeClaimId);
  prizeClaim.vault = _vaultId;
  prizeClaim.winner = _winnerId;
  prizeClaim.recipient = _recipientId;
  prizeClaim.draw = _drawId.toString();
  prizeClaim.tier = _tier;
  prizeClaim.prizeIndex = _prizeIndex;
  prizeClaim.payout = _payout;
  prizeClaim.fee = _fee;
  prizeClaim.feeRecipient = _feeRecipientId;
  prizeClaim.timestamp = _timestamp;

  // Save PrizeClaim entity
  prizeClaim.save();

  return prizeClaim;
};
