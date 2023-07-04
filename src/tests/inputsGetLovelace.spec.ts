import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputsGetLovelace } from "../inputsGetLovelace";
import { BlockfrostUtxo } from "../types";

describe("inputsGetLovelace", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns the total lovelace from all inputs", () => {
    const inputs = [
      getMockBlockfrostUtxo({
        address: "address1",
        lovelace: "1000",
      }),
      getMockBlockfrostUtxo({
        address: "address2",
        lovelace: "2000",
      }),
      getMockBlockfrostUtxo({
        address: "address3",
        lovelace: "3000",
      }),
    ];

    const result = inputsGetLovelace(inputs);

    expect(result).toBe(6000n);
  });

  it("returns 0 if inputs array is empty", () => {
    const inputs: BlockfrostUtxo[] = [];

    const result = inputsGetLovelace(inputs);

    expect(result).toBe(0n);
  });
});
