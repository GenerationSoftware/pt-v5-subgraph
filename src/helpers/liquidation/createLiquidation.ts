import { BigInt, Bytes } from '@graphprotocol/graph-ts';

import { Liquidation } from '../../../generated/schema';

export const createLiquidation = (
  id: Bytes,
  liquidationPair: Bytes,
  sender: Bytes,
  receiver: Bytes,
  amountOut: BigInt,
  amountInMax: BigInt,
  amountIn: BigInt,
  deadline: i32,
  timestamp: BigInt,
  txHash: Bytes,
  gasUsed: BigInt,
): Liquidation => {
  const liquidation = new Liquidation(id);

  liquidation.liquidationPair = liquidationPair;
  liquidation.sender = sender;
  liquidation.receiver = receiver;

  liquidation.amountOut = amountOut;
  liquidation.amountIn = amountIn;
  liquidation.amountInMax = amountInMax;

  liquidation.deadline = deadline;
  liquidation.timestamp = timestamp;
  liquidation.txHash = txHash;
  liquidation.gasUsed = gasUsed;

  liquidation.save();

  return liquidation;
};
