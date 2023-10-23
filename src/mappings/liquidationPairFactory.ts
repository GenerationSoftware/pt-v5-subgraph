import { PairCreated } from '../../generated/LiquidationPairFactory/LiquidationPairFactory';

import { generateUniqueLogId } from '../helpers/common';
import { createLiquidationPair } from '../helpers/liquidationPair/createLiquidationPair';

export function handlePairCreated(event: PairCreated): void {
  const id = generateUniqueLogId(event);

  const address = event.params.pair;
  const tokenIn = event.params.tokenIn;
  const tokenOut = event.params.tokenOut;
  const source = event.params.source;

  const periodLength = event.params.periodLength;
  const firstPeriodStartsAt = event.params.firstPeriodStartsAt;
  const targetFirstSaleTime = event.params.targetFirstSaleTime;

  const decayConstant = event.params.decayConstant;
  const initialAmountIn = event.params.initialAmountIn;
  const initialAmountOut = event.params.initialAmountOut;
  const minimumAuctionAmount = event.params.minimumAuctionAmount;

  const timestamp = event.block.timestamp;
  const txHash = event.transaction.hash;

  const gasUsed = event.receipt!.gasUsed;

  createLiquidationPair(
    id,
    address,
    tokenIn,
    tokenOut,
    source,
    periodLength,
    firstPeriodStartsAt,
    targetFirstSaleTime,
    decayConstant,
    initialAmountIn,
    initialAmountOut,
    minimumAuctionAmount,
    timestamp,
    txHash,
    gasUsed,
  );
}
