import { Bytes } from '@graphprotocol/graph-ts';

import { VaultBooster } from '../../../generated/schema';

export const loadOrCreateVaultBooster = (
  vaultBoostId: Bytes,
  prizePool: Bytes,
  vault: Bytes,
  owner: Bytes,
): VaultBooster => {
  let vaultBoost = VaultBooster.load(vaultBoostId);

  if (!!vaultBoost) {
    return vaultBoost;
  }

  // create case
  vaultBoost = new VaultBooster(vaultBoostId);
  vaultBoost.address = vaultBoostId;
  vaultBoost.prizePool = prizePool;
  vaultBoost.vault = vault;
  vaultBoost.owner = owner;
  vaultBoost.save();

  return vaultBoost;
};
