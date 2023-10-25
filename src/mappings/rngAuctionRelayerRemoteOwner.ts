import { RelayedToDispatcher } from '../../generated/RngAuctionRelayerRemoteOwner/RngAuctionRelayerRemoteOwner';

import { createRngRelay } from '../helpers/rngRelayAuctionRemoteOwner/createRngRelay';
import { generateUniqueLogId } from '../helpers/common';

export function handleRelayedToDispatcher(event: RelayedToDispatcher): void {
  const id = generateUniqueLogId(event);

  const from = event.transaction.from;

  const messageDispatcher = event.params.messageDispatcher;
  const remoteOwnerChainId = event.params.remoteOwnerChainId;
  const remoteOwner = event.params.remoteOwner;
  const remoteRngAuctionRelayListener = event.params.remoteRngAuctionRelayListener;
  const rewardRecipient = event.params.rewardRecipient;
  const messageId = event.params.messageId;

  const gasUsed = event.receipt!.gasUsed;

  const timestamp = event.block.timestamp;
  const txHash = event.transaction.hash;

  createRngRelay(
    id,
    from,
    messageDispatcher,
    remoteOwnerChainId,
    remoteOwner,
    remoteRngAuctionRelayListener,
    rewardRecipient,
    messageId,
    timestamp,
    txHash,
    gasUsed,
  );
}
