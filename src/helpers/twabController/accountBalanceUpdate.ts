import { Address, BigInt } from '@graphprotocol/graph-ts';

import { Account, AccountBalanceUpdate } from '../../../generated/schema';
import { loadOrCreateAccount } from './loadOrCreateAccount';

export const createAccountBalanceUpdate = (
    id: string,
    account: Account,
    amount: BigInt,
    delegateAmount: BigInt,
    timestamp: BigInt,
): AccountBalanceUpdate => {
    const balanceUpdate = new AccountBalanceUpdate(id);
    balanceUpdate.account = account.id;
    balanceUpdate.amount = amount;
    balanceUpdate.delegateAmount = delegateAmount;
    balanceUpdate.balance = account.balance;
    balanceUpdate.delegateBalance = account.delegateBalance;
    balanceUpdate.timestamp = timestamp;
    balanceUpdate.save();
    return balanceUpdate;
}

export const updateAccountBalance = (
    id: string,
    vaultId: Address,
    userId: Address,
    amount: BigInt,
    delegateAmount: BigInt,
    timestamp: BigInt,
): AccountBalanceUpdate => {

    // Update account balance
    const account = loadOrCreateAccount(vaultId, userId);
    account.balance = account.balance.plus(amount);
    account.delegateBalance = account.delegateBalance.plus(delegateAmount);
    account.save();

    // Create balance update entity
    return createAccountBalanceUpdate(id, account, amount, delegateAmount, timestamp);
};
