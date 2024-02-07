import { Bytes } from '@graphprotocol/graph-ts';

import { Account, User } from '../../../generated/schema';
import { ZERO, generateHashId } from '../common';
import { loadOrCreatePrizeVault } from '../prizeVault/loadOrCreatePrizeVault';

export function loadOrCreateAccount(prizeVaultId: Bytes, userId: Bytes): Account {
  loadOrCreatePrizeVault(prizeVaultId);
  loadOrCreateUser(userId);

  const compositeId = generateHashId([prizeVaultId, userId]);
  let account = Account.load(compositeId);

  // create case
  if (account == null) {
    account = new Account(compositeId);
    account.prizeVault = prizeVaultId;
    account.user = userId;
    account.balance = ZERO;
    account.delegateBalance = ZERO;
    account.save();
  }

  return account as Account;
}

function loadOrCreateUser(id: Bytes): User {
  let user = User.load(id);

  // create case
  if (user == null) {
    user = new User(id);
    user.address = id;
    user.save();
  }

  return user as User;
}
