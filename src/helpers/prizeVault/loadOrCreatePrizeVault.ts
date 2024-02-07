import { Bytes } from '@graphprotocol/graph-ts';

import { PrizeVault } from '../../../generated/schema';
import { ZERO } from '../common';

export const loadOrCreatePrizeVault = (prizeVaultId: Bytes): PrizeVault => {
  let prizeVault = PrizeVault.load(prizeVaultId);

  if (!!prizeVault) {
    return prizeVault;
  }

  // create case
  prizeVault = new PrizeVault(prizeVaultId);
  prizeVault.address = prizeVaultId;
  prizeVault.balance = ZERO;
  prizeVault.delegateBalance = ZERO;
  prizeVault.save();

  return prizeVault;
};
