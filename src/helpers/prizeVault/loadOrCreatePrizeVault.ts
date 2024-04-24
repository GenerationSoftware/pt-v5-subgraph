import { Address, Bytes } from '@graphprotocol/graph-ts';

import { PrizeVault } from '../../../generated/schema';
import { ZERO } from '../common';

export const loadOrCreatePrizeVault = (
  prizeVaultId: Bytes,
  yieldVault: Bytes | null = null,
  prizePool: Bytes | null = null,
  name: string | null = null,
  symbol: string | null = null,
): PrizeVault => {
  let prizeVault = PrizeVault.load(prizeVaultId);

  if (!!prizeVault) {
    return prizeVault;
  }

  // create case
  prizeVault = new PrizeVault(prizeVaultId);
  prizeVault.address = prizeVaultId;
  prizeVault.balance = ZERO;
  prizeVault.delegateBalance = ZERO;
  prizeVault.yieldVault = yieldVault;
  prizeVault.prizePool = prizePool;
  prizeVault.name = name;
  prizeVault.symbol = symbol;
  prizeVault.save();

  return prizeVault;
};

export const loadPrizeVault = (prizeVaultId: Bytes): PrizeVault => {
  return PrizeVault.load(prizeVaultId) as PrizeVault;
};
