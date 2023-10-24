import { CreatedVaultBooster } from '../../generated/VaultBoostFactory/VaultBoostFactory';
import { VaultBooster as VaultBoosterTemplate } from '../../generated/templates';

import { loadOrCreateVaultBooster } from '../helpers/vault/loadOrCreateVaultBooster';

export function handleCreatedVaultBooster(event: CreatedVaultBooster): void {
  const id = event.params.vaultBooster;

  const prizePool = event.params.prizePool;
  const vault = event.params.vault;

  const owner = event.params.owner;

  const vaultBooster = loadOrCreateVaultBooster(id);
  vaultBooster.prizePool = prizePool;
  vaultBooster.vault = vault;
  vaultBooster.owner = owner;
  vaultBooster.save();

  // Start listening for events from the dynamically generated contract
  VaultBoosterTemplate.create(id);
}
