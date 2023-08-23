import {
  ClaimedPrize,
} from "../../generated/PrizePool/PrizePool";
import { createPrizeClaim } from "../helpers/prizePool/prizeClaim";

export function handleClaimedPrize(event: ClaimedPrize): void {
  const vault = event.params.vault;
  const winner = event.params.winner;
  const recipient = event.params.recipient;

  const drawId = event.params.drawId;
  const tier = event.params.tier;
  const prizeIndex = event.params.prizeIndex;

  const payout = event.params.payout;
  const fee = event.params.fee;
  const feeRecipient = event.params.feeRecipient;
  
  const timestamp = event.block.timestamp;

  createPrizeClaim(
    vault,
    winner,
    recipient,
    drawId,
    tier,
    prizeIndex,
    payout,
    fee,
    feeRecipient,
    timestamp
  );
}