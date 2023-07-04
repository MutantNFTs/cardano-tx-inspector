import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";

import { inputsGetLovelaceByAddress } from "../inputsGetLovelaceByAddress";

describe("inputsGetLovelaceByAddress", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns the total lovelace from inputs with matching address", () => {
    const inputs = [
      getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "1000",
      }),
      getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "2000",
      }),
      getMockBlockfrostUtxo({
        address: getMockAddr(1),
        lovelace: "3000",
      }),
    ];

    const result = inputsGetLovelaceByAddress(inputs, getMockAddr());

    expect(result).toBe(3000n);
  });

  it("returns 0 if no input matches the address", () => {
    const inputs = [
      getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "1000",
      }),
      getMockBlockfrostUtxo({
        address: getMockAddr(1),
        lovelace: "2000",
      }),
      getMockBlockfrostUtxo({
        address: getMockAddr(1),
        lovelace: "3000",
      }),
    ];

    const result = inputsGetLovelaceByAddress(inputs, getMockAddr(2));

    expect(result).toBe(0n);
  });
});
