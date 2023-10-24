import { Bytes } from '@graphprotocol/graph-ts';

import { VaultBooster } from '../../../generated/schema';

export const loadOrCreateVaultBooster = (vaultBoostId: Bytes): VaultBooster => {
  let vaultBoost = VaultBooster.load(vaultBoostId);

  if (!!vaultBoost) {
    return vaultBoost;
  }

  // create case
  vaultBoost = new VaultBooster(vaultBoostId);
  vaultBoost.address = vaultBoostId;
  vaultBoost.save();

  return vaultBoost;
};
