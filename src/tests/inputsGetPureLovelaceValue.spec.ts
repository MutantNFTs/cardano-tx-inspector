import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputsGetPureLovelaceValue } from "../inputsGetPureLovelaceValue";
import { BlockfrostUtxo } from "../types";

describe("inputsGetPureLovelaceValue", () => {
  it("returns the sum of pure lovelace values from inputs", () => {
    const inputs = [
      getMockBlockfrostUtxo({
        address: "address1",
        lovelace: "1000",
      }),
      getMockBlockfrostUtxo({
        address: "address2",
        lovelace: "2000",
        additionalAssets: [{ unit: "asset1", quantity: "10" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
      }),
    ];

    const result = inputsGetPureLovelaceValue(inputs);

    expect(result).toBe(4000n);
  });

  it("returns 0 if no input contains pure lovelace value", () => {
    const inputs = [
      getMockBlockfrostUtxo({
        address: "address1",
        lovelace: "1000",
        additionalAssets: [{ unit: "asset1", quantity: "10" }],
      }),
      getMockBlockfrostUtxo({
        address: "address2",
        lovelace: "2000",
        additionalAssets: [{ unit: "asset2", quantity: "5" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
        additionalAssets: [{ unit: "asset3", quantity: "2" }],
      }),
    ];

    const result = inputsGetPureLovelaceValue(inputs);

    expect(result).toBe(0n);
  });

  it("returns 0 if inputs array is empty", () => {
    const inputs: BlockfrostUtxo[] = [];

    const result = inputsGetPureLovelaceValue(inputs);

    expect(result).toBe(0n);
  });
});
