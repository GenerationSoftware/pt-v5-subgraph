import { BigInt, Bytes } from '@graphprotocol/graph-ts';

import { Draw } from '../../../generated/schema';

export const createDraw = (
  drawId: i32,
  winningRandomNumber: BigInt,
  numTiers: i32,
  lastNumTiers: i32,
  reserve: BigInt,
  prizeTokensPerShare: BigInt,
  drawOpenedAt: BigInt,
  block: BigInt,
  timestamp: BigInt,
  txHash: Bytes,
): Draw => {
  const newDraw = new Draw(Bytes.fromI32(drawId));

  newDraw.drawId = drawId;
  newDraw.winningRandomNumber = winningRandomNumber;
  newDraw.numTiers = numTiers;
  newDraw.lastNumTiers = lastNumTiers;
  newDraw.reserve = reserve;
  newDraw.prizeTokensPerShare = prizeTokensPerShare;
  newDraw.drawOpenedAt = drawOpenedAt;
  newDraw.block = block;
  newDraw.timestamp = timestamp;
  newDraw.txHash = txHash;
  newDraw.save();

  return newDraw;
};

export const loadDraw = (drawId: i32): Draw => {
  return Draw.load(Bytes.fromI32(drawId)) as Draw;
};
