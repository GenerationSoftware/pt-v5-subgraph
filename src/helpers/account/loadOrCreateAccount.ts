import { log } from '@graphprotocol/graph-ts';
import { Bytes } from '@graphprotocol/graph-ts';

import { Account, User } from '../../../generated/schema';
import { ZERO, generateHashId } from '../common';
import { loadOrCreateVault } from '../vault/loadOrCreateVault';

export function loadOrCreateAccount(vaultId: Bytes, userId: Bytes): Account {
  loadOrCreateVault(vaultId);
  loadOrCreateUser(userId);

  const compositeId = generateHashId([vaultId, userId]);
  let account = Account.load(compositeId);

  // create case
  if (account == null) {
    account = new Account(compositeId);
    account.vault = vaultId;
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
