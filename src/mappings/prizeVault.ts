import { LiquidationPairSet } from '../../generated/templates/PrizeVault/PrizeVault';

import { loadOrCreatePrizeVault } from '../helpers/prizeVault/loadOrCreatePrizeVault';

export function handleLiquidationPairSet(event: LiquidationPairSet): void {
  const vault = loadOrCreatePrizeVault(event.address);

  vault.liquidationPair = event.params.liquidationPair;
  vault.save();
}
