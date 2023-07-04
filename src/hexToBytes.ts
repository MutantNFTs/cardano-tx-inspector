export const hexToBytes = (hex: string): number[] => {
  const bytes: number[] = [];

  for (let c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substring(c, c + 2), 16));

  return bytes;
};
