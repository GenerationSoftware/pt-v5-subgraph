import { PairCreated } from '../../generated/TpdaLiquidationPairFactory/TpdaLiquidationPairFactory';

import { createLiquidationPair } from '../helpers/liquidationPair/createLiquidationPair';

export function handlePairCreated(event: PairCreated): void {
  const id = event.params.pair;

  const address = event.params.pair;
  const source = event.params.source;
  const tokenIn = event.params.tokenIn;
  const tokenOut = event.params.tokenOut;

  const targetAuctionPeriod = event.params.targetAuctionPeriod;
  const minimumAuctionAmount = event.params.minimumAuctionAmount;
  const smoothingFactor = event.params.smoothingFactor;

  const timestamp = event.block.timestamp;
  const txHash = event.transaction.hash;

  const gasUsed = event.receipt!.gasUsed;

  createLiquidationPair(
    id,
    address,
    source,
    tokenIn,
    tokenOut,
    targetAuctionPeriod,
    minimumAuctionAmount,
    smoothingFactor,
    timestamp,
    txHash,
    gasUsed,
  );
}
