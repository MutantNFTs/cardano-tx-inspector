export const toAda = (value: bigint): number =>
  parseFloat(value.toString()) / 1000000;
