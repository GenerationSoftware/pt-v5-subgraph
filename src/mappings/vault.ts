import { LiquidationPairSet } from '../../generated/templates/Vault/Vault';

import { loadOrCreateVault } from '../helpers/vault/loadOrCreateVault';

export function handleLiquidationPairSet(event: LiquidationPairSet): void {
  const vault = loadOrCreateVault(event.address);

  vault.liquidationPair = event.params.liquidationPair;
  vault.save();
}
