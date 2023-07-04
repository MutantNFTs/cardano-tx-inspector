import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputHasAsset } from "../inputHasAsset";
import { BlockfrostUtxo } from "../types";

describe("inputHasAsset", () => {
  it("should return true if input contains an amount with the specified asset unit", () => {
    const asset = "asset123";
    const input: BlockfrostUtxo = getMockBlockfrostUtxo({
      address: getMockAddr(),
      lovelace: "10",
      additionalAssets: [
        { unit: "lovelace", quantity: "1000000" },
        { unit: asset, quantity: "1" },
        { unit: "otherAsset", quantity: "5" },
      ],
    });

    const result = inputHasAsset(input, asset);
    expect(result).toBe(true);
  });

  it("should return false if input does not contain any amount with the specified asset unit", () => {
    const asset = "asset123";
    const input: BlockfrostUtxo = getMockBlockfrostUtxo({
      address: getMockAddr(),
      lovelace: "10",
      additionalAssets: [
        { unit: "lovelace", quantity: "1000000" },
        { unit: "otherAsset", quantity: "5" },
      ],
    });

    const result = inputHasAsset(input, asset);
    expect(result).toBe(false);
  });
});
