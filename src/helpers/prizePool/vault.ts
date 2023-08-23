import { Bytes } from "@graphprotocol/graph-ts";
import { Vault } from "../../../generated/schema";

export const loadOrCreateVault = (vaultId: Bytes): Vault => {
  const vault = Vault.load(vaultId);

  if (!!vault) {
    return vault;
  }

  const newVault = new Vault(vaultId);
  newVault.save();

  return newVault;
};
