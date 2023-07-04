export const toAda = (value: bigint): number => {
  if (value < 0n) throw new RangeError("Cannot convert negative value to Ada");

  return parseFloat(value.toString()) / 1000000;
};
