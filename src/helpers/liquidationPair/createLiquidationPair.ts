import { BigInt, Bytes } from '@graphprotocol/graph-ts';

import { LiquidationPair } from '../../../generated/schema';

export const createLiquidationPair = (
  id: Bytes,
  address: Bytes,
  source: Bytes,
  tokenIn: Bytes,
  tokenOut: Bytes,
  targetAuctionPeriod: BigInt,
  minimumAuctionAmount: BigInt,
  smoothingFactor: BigInt,
  timestamp: BigInt,
  txHash: Bytes,
  gasUsed: BigInt,
): LiquidationPair => {
  const liquidationPair = new LiquidationPair(id);

  liquidationPair.address = address;
  liquidationPair.source = source;
  liquidationPair.tokenIn = tokenIn;
  liquidationPair.tokenOut = tokenOut;

  liquidationPair.targetAuctionPeriod = targetAuctionPeriod;
  liquidationPair.minimumAuctionAmount = minimumAuctionAmount;
  liquidationPair.smoothingFactor = smoothingFactor;

  liquidationPair.timestamp = timestamp;
  liquidationPair.txHash = txHash;
  liquidationPair.gasUsed = gasUsed;

  liquidationPair.save();

  return liquidationPair;
};
