import { NewPrizeVault } from '../../generated/PrizeVaultFactory/PrizeVaultFactory';
import { PrizeVault as PrizeVaultTemplate } from '../../generated/templates';

import { loadOrCreatePrizeVault } from '../helpers/prizeVault/loadOrCreatePrizeVault';

export function handleNewPrizeVault(event: NewPrizeVault): void {
  const id = event.params.vault;

  loadOrCreatePrizeVault(id);

  // Start listening for events from the dynamically generated contract
  PrizeVaultTemplate.create(id);
}
