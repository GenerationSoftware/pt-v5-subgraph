import { log } from '@graphprotocol/graph-ts';
import { Bytes, BigInt, Address } from '@graphprotocol/graph-ts';

import { PrizeClaim } from '../../../generated/schema';
import { loadDraw } from '../draw/loadOrCreateDraw';
import { loadOrCreateVault } from '../vault/loadOrCreateVault';
import { loadOrCreateAccount } from '../account/loadOrCreateAccount';
import { generateHashId } from '../common';

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
  _txHash: Bytes,
): PrizeClaim => {
  const prizeClaimId = generateHashId([
    _vaultId,
    _winnerId,
    _recipientId,
    Bytes.fromI32(_drawId),
    Bytes.fromI32(_tier),
    Bytes.fromI32(_prizeIndex.toI32()),
  ]);

  // Ensure other entities are initialized
  loadDraw(_drawId);
  loadOrCreateVault(_vaultId);
  loadOrCreateAccount(_vaultId, _winnerId);
  loadOrCreateAccount(_vaultId, _recipientId);
  loadOrCreateAccount(_vaultId, _feeRecipientId);

  // Initialize PrizeClaim entity
  const prizeClaim = new PrizeClaim(prizeClaimId);
  prizeClaim.vault = _vaultId;
  prizeClaim.winner = _winnerId;
  prizeClaim.recipient = _recipientId;
  prizeClaim.draw = Bytes.fromI32(_drawId);
  prizeClaim.tier = _tier;
  prizeClaim.prizeIndex = _prizeIndex;
  prizeClaim.payout = _payout;
  prizeClaim.fee = _fee;
  prizeClaim.feeRecipient = _feeRecipientId;
  prizeClaim.timestamp = _timestamp;
  prizeClaim.txHash = _txHash;

  // Save PrizeClaim entity
  prizeClaim.save();

  return prizeClaim;
};
