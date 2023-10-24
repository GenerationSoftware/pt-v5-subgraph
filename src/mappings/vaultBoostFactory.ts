import { CreatedVaultBooster } from '../../generated/VaultBoostFactory/VaultBoostFactory';

import { loadOrCreateVaultBooster } from '../helpers/vault/loadOrCreateVaultBooster';

export function handleCreatedVaultBooster(event: CreatedVaultBooster): void {
  const id = event.params.vaultBooster;

  const prizePool = event.params.prizePool;
  const vault = event.params.vault;

  const owner = event.params.owner;

  loadOrCreateVaultBooster(id, prizePool, vault, owner);
}
