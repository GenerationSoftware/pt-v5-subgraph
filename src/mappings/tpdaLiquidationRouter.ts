import { SwappedExactAmountOut } from '../../generated/TpdaLiquidationRouter/TpdaLiquidationRouter';

import { generateUniqueLogId } from '../helpers/common';
import { createLiquidation } from '../helpers/liquidation/createLiquidation';

// (indexed address,indexed address,indexed address,uint256,uint256,uint256,uint256)
export function handleSwappedExactAmountOut(event: SwappedExactAmountOut): void {
  const id = generateUniqueLogId(event);

  const liquidationPair = event.params.liquidationPair;
  const sender = event.params.sender;
  const receiver = event.params.receiver;

  const amountOut = event.params.amountOut;
  const amountInMax = event.params.amountInMax;
  const amountIn = event.params.amountIn;
  const deadline = event.params.deadline;

  const timestamp = event.block.timestamp;
  const txHash = event.transaction.hash;

  const gasUsed = event.receipt!.gasUsed;

  createLiquidation(
    id,
    liquidationPair,
    sender,
    receiver,
    amountOut,
    amountInMax,
    amountIn,
    deadline,
    timestamp,
    txHash,
    gasUsed,
  );
}
