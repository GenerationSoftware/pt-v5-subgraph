import { Address, BigInt } from '@graphprotocol/graph-ts';

import { VaultObservation } from '../../../generated/schema';
import { loadOrCreateVault } from './loadOrCreateVault';

export const createVaultObservation = (
    id: string,
    vaultId: Address,
    balance: BigInt,
    delegateBalance: BigInt,
    cumulativeBalance: BigInt,
    isNew: boolean,
    timestamp: BigInt,
): VaultObservation => {

    // Load or create vault
    const vault = loadOrCreateVault(vaultId);

    // Create vault observation entity
    const vaultObservation = new VaultObservation(id);
    vaultObservation.vault = vault.id;
    vaultObservation.balance = balance;
    vaultObservation.delegateBalance = delegateBalance;
    vaultObservation.cumulativeBalance = cumulativeBalance;
    vaultObservation.isNew = isNew;
    vaultObservation.timestamp = timestamp;
    vaultObservation.save();
    return vaultObservation;
};
