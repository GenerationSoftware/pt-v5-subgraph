import { LiquidationPairSet } from '../../generated/templates/VaultBooster/VaultBooster';

import { loadOrCreateVaultBooster } from '../helpers/vault/loadOrCreateVaultBooster';

export function handleLiquidationPairSet(event: LiquidationPairSet): void {
  const vaultBooster = loadOrCreateVaultBooster(event.address);

  vaultBooster.liquidationPair = event.params.liquidationPair;
  vaultBooster.save();
}
