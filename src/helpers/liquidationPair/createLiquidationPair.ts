import { BigInt, Bytes } from '@graphprotocol/graph-ts';

import { LiquidationPair } from '../../../generated/schema';

export const createLiquidationPair = (
  id: Bytes,
  address: Bytes,
  tokenIn: Bytes,
  tokenOut: Bytes,
  source: Bytes,
  periodLength: BigInt,
  firstPeriodStartsAt: BigInt,
  targetFirstSaleTime: BigInt,
  decayConstant: BigInt,
  initialAmountIn: BigInt,
  initialAmountOut: BigInt,
  minimumAuctionAmount: BigInt,
  timestamp: BigInt,
  txHash: Bytes,
  gasUsed: BigInt,
): LiquidationPair => {
  const liquidationPair = new LiquidationPair(id);

  liquidationPair.address = address;
  liquidationPair.tokenIn = tokenIn;
  liquidationPair.tokenOut = tokenOut;
  liquidationPair.source = source;

  liquidationPair.periodLength = periodLength;
  liquidationPair.firstPeriodStartsAt = firstPeriodStartsAt;
  liquidationPair.targetFirstSaleTime = targetFirstSaleTime;

  liquidationPair.decayConstant = decayConstant;
  liquidationPair.initialAmountIn = initialAmountIn;
  liquidationPair.initialAmountOut = initialAmountOut;
  liquidationPair.minimumAuctionAmount = minimumAuctionAmount;

  liquidationPair.timestamp = timestamp;
  liquidationPair.txHash = txHash;
  liquidationPair.gasUsed = gasUsed;

  liquidationPair.save();

  return liquidationPair;
};
