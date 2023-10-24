import { NewFactoryVault } from '../../generated/VaultFactory/VaultFactory';

import { loadOrCreateVault } from '../helpers/vault/loadOrCreateVault';

export function handleNewFactoryVault(event: NewFactoryVault): void {
  const id = event.params.vault;

  loadOrCreateVault(id);
}
