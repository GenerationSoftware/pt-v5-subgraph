import { BigInt, Bytes } from '@graphprotocol/graph-ts';

import { Draw } from '../../../generated/schema';

export const createDraw = (
  drawId: i32,
  numTiers: i32,
  lastNumTiers: i32,
  timestamp: BigInt,
  txHash: Bytes,
): Draw => {
  const newDraw = new Draw(Bytes.fromI32(drawId));

  newDraw.drawId = drawId;
  newDraw.numTiers = numTiers;
  newDraw.lastNumTiers = lastNumTiers;
  newDraw.closedAtTimestamp = timestamp;
  newDraw.txHash = txHash;
  newDraw.save();

  return newDraw;
};

export const loadDraw = (drawId: i32): Draw => {
  return Draw.load(Bytes.fromI32(drawId)) as Draw;
};
