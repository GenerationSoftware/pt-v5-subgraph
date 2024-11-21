import { DrawAwarded } from '../../generated/PrizePool/PrizePool';
// import { ClaimedPrize, DrawAwarded } from '../../generated/PrizePool/PrizePool';

// import { createPrizeClaim } from '../helpers/prizePool/prizeClaim';
import { createDraw } from '../helpers/draw/loadOrCreateDraw';

// export function handleClaimedPrize(event: ClaimedPrize): void {
//   const vault = event.params.vault;
//   const winner = event.params.winner;
//   const recipient = event.params.recipient;

//   const drawId = event.params.drawId;
//   const tier = event.params.tier;
//   const prizeIndex = event.params.prizeIndex;

//   const payout = event.params.payout;
//   const claimReward = event.params.claimReward;
//   const claimRewardRecipient = event.params.claimRewardRecipient;

//   const block = event.block.number;
//   const timestamp = event.block.timestamp;
//   const txHash = event.transaction.hash;

//   const gasUsed = event.receipt!.gasUsed;

//   createPrizeClaim(
//     vault,
//     winner,
//     recipient,
//     drawId,
//     tier,
//     prizeIndex,
//     payout,
//     claimReward,
//     claimRewardRecipient,
//     block,
//     timestamp,
//     txHash,
//     gasUsed,
//   );
// }

export function handleDrawAwarded(event: DrawAwarded): void {
  const drawId = event.params.drawId;
  const winningRandomNumber = event.params.winningRandomNumber;
  const numTiers = event.params.numTiers;
  const lastNumTiers = event.params.lastNumTiers;
  const reserve = event.params.reserve;
  const prizeTokensPerShare = event.params.prizeTokensPerShare;
  const drawOpenedAt = event.params.drawOpenedAt;

  const block = event.block.number;
  const timestamp = event.block.timestamp;
  const txHash = event.transaction.hash;

  createDraw(
    drawId,
    winningRandomNumber,
    numTiers,
    lastNumTiers,
    reserve,
    prizeTokensPerShare,
    drawOpenedAt,
    block,
    timestamp,
    txHash,
  );
}
