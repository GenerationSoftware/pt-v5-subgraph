import { Address, BigInt } from '@graphprotocol/graph-ts';

import { Vault, VaultBalanceUpdate } from '../../../generated/schema';
import { loadOrCreateVault } from './loadOrCreateVault';

export const createVaultBalanceUpdate = (
  id: string,
  vault: Vault,
  amount: BigInt,
  delegateAmount: BigInt,
  timestamp: BigInt,
): VaultBalanceUpdate => {
  const balanceUpdate = new VaultBalanceUpdate(id);
  balanceUpdate.vault = vault.id;
  balanceUpdate.amount = amount;
  balanceUpdate.delegateAmount = delegateAmount;
  balanceUpdate.balance = vault.balance;
  balanceUpdate.delegateBalance = vault.delegateBalance;
  balanceUpdate.timestamp = timestamp;
  balanceUpdate.save();
  return balanceUpdate;
};

export const updateVaultBalance = (
  id: string,
  vaultId: Address,
  amount: BigInt,
  delegateAmount: BigInt,
  timestamp: BigInt,
): VaultBalanceUpdate => {
  // Update vault balance
  const vault = loadOrCreateVault(vaultId);
  vault.balance = vault.balance.plus(amount);
  vault.delegateBalance = vault.delegateBalance.plus(delegateAmount);
  vault.save();

  // Create balance update entity:
  return createVaultBalanceUpdate(id, vault, amount, delegateAmount, timestamp);
};
