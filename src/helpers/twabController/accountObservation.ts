import { Address, BigInt } from '@graphprotocol/graph-ts';

import { AccountObservation } from '../../../generated/schema';
import { loadOrCreateAccount } from './loadOrCreateAccount';

export const createAccountObservation = (
  id: string,
  vaultId: Address,
  userId: Address,
  balance: BigInt,
  delegateBalance: BigInt,
  cumulativeBalance: BigInt,
  isNew: boolean,
  timestamp: BigInt,
): AccountObservation => {
  // Load or create account
  const account = loadOrCreateAccount(vaultId, userId);

  // Create account observation entity
  const accountObservation = new AccountObservation(id);
  accountObservation.account = account.id;
  accountObservation.balance = balance;
  accountObservation.delegateBalance = delegateBalance;
  accountObservation.cumulativeBalance = cumulativeBalance;
  accountObservation.isNew = isNew;
  accountObservation.timestamp = timestamp;
  accountObservation.save();
  return accountObservation;
};
