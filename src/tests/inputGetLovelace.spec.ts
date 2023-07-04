import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputGetLovelace } from "../inputGetLovelace";
import { BlockfrostUtxo } from "../types";

describe("inputGetLovelace", () => {
  it("should return the quantity of 'lovelace' unit as a BigInt", () => {
    const input: BlockfrostUtxo = getMockBlockfrostUtxo({
      address: getMockAddr(),
      lovelace: "10",
    });

    const result = inputGetLovelace(input);
    expect(result).toBe(BigInt("10"));
  });

  it("should return 0 if 'lovelace' unit is not present", () => {
    const input: BlockfrostUtxo = {
      ...getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "10",
      }),
      amount: [],
    };

    const result = inputGetLovelace(input);
    expect(result).toBe(BigInt("0"));
  });
});
