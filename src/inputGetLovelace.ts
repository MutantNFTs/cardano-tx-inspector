import { BlockfrostUtxo } from "./types";

export const inputGetLovelace = (input: BlockfrostUtxo) => {
  return BigInt(
    input.amount.find((a) => a.unit === "lovelace")?.quantity || "0"
  );
};
