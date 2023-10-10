import {
  IncreasedBalance,
  DecreasedBalance,
  IncreasedTotalSupply,
  DecreasedTotalSupply,
  Delegated,
  ObservationRecorded,
  TotalSupplyObservationRecorded,
} from '../../generated/TwabController/TwabController';
import { createAccountObservation } from '../helpers/twabController/accountObservation';
import { updateAccountBalance } from '../helpers/twabController/accountBalanceUpdate';
import { loadOrCreateAccount } from '../helpers/twabController/loadOrCreateAccount';
import { createVaultObservation } from '../helpers/twabController/vaultObservation';
import { updateVaultBalance } from '../helpers/twabController/vaultBalanceUpdate';
import { generateUniqueLogId } from '../helpers/common';

export function handleIncreasedBalance(event: IncreasedBalance): void {
  const vault = event.params.vault;
  const user = event.params.user;
  const amount = event.params.amount;
  const delegateAmount = event.params.delegateAmount;
  const updateId = generateUniqueLogId(event);
  updateAccountBalance(updateId, vault, user, amount, delegateAmount, event.block.timestamp);
}

export function handleDecreasedBalance(event: DecreasedBalance): void {
  const vault = event.params.vault;
  const user = event.params.user;
  const amount = event.params.amount;
  const delegateAmount = event.params.delegateAmount;
  const updateId = generateUniqueLogId(event);
  updateAccountBalance(
    updateId,
    vault,
    user,
    amount.neg(),
    delegateAmount.neg(),
    event.block.timestamp,
  );
}

export function handleIncreasedTotalSupply(event: IncreasedTotalSupply): void {
  const vault = event.params.vault;
  const amount = event.params.amount;
  const delegateAmount = event.params.delegateAmount;
  const updateId = generateUniqueLogId(event);
  updateVaultBalance(updateId, vault, amount, delegateAmount, event.block.timestamp);
}

export function handleDecreasedTotalSupply(event: DecreasedTotalSupply): void {
  const vault = event.params.vault;
  const amount = event.params.amount;
  const delegateAmount = event.params.delegateAmount;
  const updateId = generateUniqueLogId(event);
  updateVaultBalance(updateId, vault, amount.neg(), delegateAmount.neg(), event.block.timestamp);
}

export function handleDelegated(event: Delegated): void {
  const vault = event.params.vault;
  const delegator = event.params.delegator;
  const delegate = event.params.delegate;

  const delegatorAccount = loadOrCreateAccount(vault, delegator);
  const delegateAccount = loadOrCreateAccount(vault, delegate);

  delegatorAccount.delegate = delegateAccount.id;
  delegatorAccount.save();
}

export function handleObservationRecorded(event: ObservationRecorded): void {
  const vault = event.params.vault;
  const user = event.params.user;
  const isNew = event.params.isNew;
  const balance = event.params.balance;
  const delegateBalance = event.params.delegateBalance;
  const observation = event.params.observation;
  const observationId = generateUniqueLogId(event);
  createAccountObservation(
    observationId,
    vault,
    user,
    balance,
    delegateBalance,
    observation.cumulativeBalance,
    isNew,
    event.block.timestamp,
  );
}

export function handleTotalSupplyObservationRecorded(event: TotalSupplyObservationRecorded): void {
  const vault = event.params.vault;
  const isNew = event.params.isNew;
  const balance = event.params.balance;
  const delegateBalance = event.params.delegateBalance;
  const observation = event.params.observation;
  const observationId = generateUniqueLogId(event);
  createVaultObservation(
    observationId,
    vault,
    balance,
    delegateBalance,
    observation.cumulativeBalance,
    isNew,
    event.block.timestamp,
  );
}
