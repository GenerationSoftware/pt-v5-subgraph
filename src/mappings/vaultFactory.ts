import { NewFactoryVault } from '../../generated/VaultFactory/VaultFactory';
import { Vault as VaultTemplate } from '../../generated/templates';

import { loadOrCreateVault } from '../helpers/vault/loadOrCreateVault';

export function handleNewFactoryVault(event: NewFactoryVault): void {
  const id = event.params.vault;

  loadOrCreateVault(id);

  // Start listening for events from the dynamically generated contract
  VaultTemplate.create(id);
}
