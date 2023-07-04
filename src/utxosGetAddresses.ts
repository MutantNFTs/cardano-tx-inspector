export const utxosGetAddresses = async (utxos: { address: string }[]) => {
  const addresses = utxos.reduce((acc, output) => {
    if (output.address && !acc.includes(output.address)) {
      acc.push(output.address);
    }
    return acc;
  }, [] as string[]);

  return addresses;
};
