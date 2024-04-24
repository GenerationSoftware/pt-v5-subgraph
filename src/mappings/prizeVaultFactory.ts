import { NewPrizeVault } from '../../generated/PrizeVaultFactory/PrizeVaultFactory';
import { PrizeVault as PrizeVaultTemplate } from '../../generated/templates';

import { loadOrCreatePrizeVault } from '../helpers/prizeVault/loadOrCreatePrizeVault';

export function handleNewPrizeVault(event: NewPrizeVault): void {
  const id = event.params.vault;
  const yieldVault = event.params.yieldVault;
  const prizePool = event.params.prizePool;
  const name = event.params.name;
  const symbol = event.params.symbol;

  loadOrCreatePrizeVault(id, yieldVault, prizePool, name, symbol);

  // Start listening for events from the dynamically generated contract
  PrizeVaultTemplate.create(id);
}
