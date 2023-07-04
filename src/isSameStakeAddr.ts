import { toStakeAddress } from "./toStakeAddress";

export const isSameStakeAddr = (addr1: string, addr2: string) => {
  const stakeAddr1 = addr1.startsWith("stake") ? addr1 : toStakeAddress(addr1);
  const stakeAddr2 = addr2.startsWith("stake") ? addr2 : toStakeAddress(addr2);

  return stakeAddr1 === stakeAddr2;
};
