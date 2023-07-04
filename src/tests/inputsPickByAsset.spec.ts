import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputsPickByAsset } from "../inputsPickByAsset";
import { BlockfrostUtxo } from "../types";

describe("inputsPickByAsset", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns the input that has the specified asset", () => {
    const asset = "mockAsset";
    const inputs = [
      getMockBlockfrostUtxo({
        address: "address1",
        lovelace: "1000",
        additionalAssets: [{ unit: "mockAsset", quantity: "10" }],
      }),
      getMockBlockfrostUtxo({
        address: "address2",
        lovelace: "2000",
        additionalAssets: [{ unit: "asset2", quantity: "20" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
        additionalAssets: [{ unit: "asset3", quantity: "30" }],
      }),
    ];

    const result = inputsPickByAsset(inputs, asset);

    expect(result).toBe(inputs[0]);
  });

  it("returns null if no input has the specified asset", () => {
    const asset = "mockAsset";
    const inputs = [
      getMockBlockfrostUtxo({
        address: "address1",
        lovelace: "1000",
        additionalAssets: [{ unit: "asset1", quantity: "10" }],
      }),
      getMockBlockfrostUtxo({
        address: "address2",
        lovelace: "2000",
        additionalAssets: [{ unit: "asset2", quantity: "20" }],
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
        additionalAssets: [{ unit: "asset3", quantity: "30" }],
      }),
    ];

    const result = inputsPickByAsset(inputs, asset);

    expect(result).toBeNull();
  });

  it("returns null if inputs array is empty", () => {
    const asset = "mockAsset";
    const inputs: BlockfrostUtxo[] = [];

    const result = inputsPickByAsset(inputs, asset);

    expect(result).toBeNull();
  });
});
