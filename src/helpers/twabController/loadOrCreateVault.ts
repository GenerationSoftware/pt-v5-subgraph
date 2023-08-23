import { Bytes } from '@graphprotocol/graph-ts';

import { Vault } from '../../../generated/schema';
import { ZERO } from '../common';

export function loadOrCreateVault(id: Bytes): Vault {
    let vault = Vault.load(id);

    // create case
    if (vault == null) {
        vault = new Vault(id);
        vault.balance = ZERO;
        vault.delegateBalance = ZERO;
        vault.save();
    }

    return vault as Vault;
}
