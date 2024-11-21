// import { Address, Bytes, BigInt } from '@graphprotocol/graph-ts';

// import { PrizeVault, VaultBalanceUpdate } from '../../../generated/schema';
// import { loadOrCreatePrizeVault } from '../prizeVault/loadOrCreatePrizeVault';

// export const createVaultBalanceUpdate = (
//   id: Bytes,
//   vault: PrizeVault,
//   amount: BigInt,
//   delegateAmount: BigInt,
//   timestamp: BigInt,
//   txHash: Bytes,
// ): VaultBalanceUpdate => {
//   const balanceUpdate = new VaultBalanceUpdate(id);
//   balanceUpdate.prizeVault = vault.id;
//   balanceUpdate.amount = amount;
//   balanceUpdate.delegateAmount = delegateAmount;
//   balanceUpdate.balance = vault.balance;
//   balanceUpdate.delegateBalance = vault.delegateBalance;
//   balanceUpdate.timestamp = timestamp;
//   balanceUpdate.txHash = txHash;
//   balanceUpdate.save();
//   return balanceUpdate;
// };

// export const updateVaultBalance = (
//   id: Bytes,
//   vaultId: Address,
//   amount: BigInt,
//   delegateAmount: BigInt,
//   timestamp: BigInt,
//   txHash: Bytes,
// ): VaultBalanceUpdate => {
//   // Update vault balance
//   const vault = loadOrCreatePrizeVault(vaultId);
//   vault.balance = vault.balance.plus(amount);
//   vault.delegateBalance = vault.delegateBalance.plus(delegateAmount);
//   vault.save();

//   // Create balance update entity:
//   return createVaultBalanceUpdate(id, vault, amount, delegateAmount, timestamp, txHash);
// };
