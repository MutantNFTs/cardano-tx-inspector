import { getMockAddr } from "./__utils__/getMockAddr";
import { getMockBlockfrostUtxo } from "./__utils__/getMockBlockfrostUtxo";
import { getMockTxOut } from "./__utils__/getMockTxOut";

import { calculateLovelaceSpentByAddress } from "../calculateLovelaceSpentByAddress";

describe("calculateLovelaceSpentByAddress", () => {
  let output: bigint;

  describe("when address has 3 inputs with 10 lovelace each", () => {
    beforeEach(() => {
      const utxo = getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "10",
      });

      const outputToAnotherAddr = getMockTxOut({
        address: getMockAddr(1),
        lovelace: 10n,
      });

      output = calculateLovelaceSpentByAddress(
        [utxo, utxo, utxo],
        [outputToAnotherAddr],
        getMockAddr()
      );
    });

    it("should return 30", () => {
      expect(output).toEqual(30n);
    });
  });

  describe("when address has 3 inputs with 10 lovelace each and has 2 outputs with 10 lovelace each", () => {
    beforeEach(() => {
      const utxo = getMockBlockfrostUtxo({
        address: getMockAddr(),
        lovelace: "10",
      });

      const outputToSameAddr = getMockTxOut({
        address: getMockAddr(),
        lovelace: 10n,
      });

      output = calculateLovelaceSpentByAddress(
        [utxo, utxo, utxo],
        [outputToSameAddr, outputToSameAddr],
        getMockAddr()
      );
    });

    it("should return 10", () => {
      expect(output).toEqual(10n);
    });
  });
});
