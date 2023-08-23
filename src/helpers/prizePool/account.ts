import { Bytes } from "@graphprotocol/graph-ts";
import { Account } from "../../../generated/schema";

export const loadOrCreateAccount = (accountId: Bytes): Account => {
  const account = Account.load(accountId);

  if (!!account) {
    return account;
  }

  const newAccount = new Account(accountId);
  newAccount.save();

  return newAccount;
};
