// import { Address, Bytes, BigInt } from '@graphprotocol/graph-ts';

// import { VaultObservation } from '../../../generated/schema';
// import { loadOrCreatePrizeVault } from '../prizeVault/loadOrCreatePrizeVault';

// export const createVaultObservation = (
//   id: Bytes,
//   vaultId: Address,
//   balance: BigInt,
//   delegateBalance: BigInt,
//   cumulativeBalance: BigInt,
//   isNew: boolean,
//   timestamp: BigInt,
//   txHash: Bytes,
// ): VaultObservation => {
//   // Load or create vault
//   const vault = loadOrCreatePrizeVault(vaultId);

//   // Create vault observation entity
//   const vaultObservation = new VaultObservation(id);
//   vaultObservation.prizeVault = vault.id;
//   vaultObservation.balance = balance;
//   vaultObservation.delegateBalance = delegateBalance;
//   vaultObservation.cumulativeBalance = cumulativeBalance;
//   vaultObservation.isNew = isNew;
//   vaultObservation.timestamp = timestamp;
//   vaultObservation.txHash = txHash;
//   vaultObservation.save();
//   return vaultObservation;
// };
