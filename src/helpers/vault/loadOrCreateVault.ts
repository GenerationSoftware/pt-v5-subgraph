import { Bytes } from '@graphprotocol/graph-ts';

import { Vault } from '../../../generated/schema';
import { ZERO } from '../../helpers/common';

export const loadOrCreateVault = (vaultId: Bytes): Vault => {
  let vault = Vault.load(vaultId);

  if (!!vault) {
    return vault;
  }

  // create case
  vault = new Vault(vaultId);
  vault.address = vaultId;
  vault.balance = ZERO;
  vault.delegateBalance = ZERO;
  vault.save();

  return vault;
};
