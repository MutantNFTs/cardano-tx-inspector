import { TransactionOutputReference } from "@cardano-ogmios/schema";

import { inputsContainReferenceTxIds } from "../inputsContainReferenceTxIds";

describe("inputsContainReferenceTxIds", () => {
  it("returns true if any input contains the reference txIds", () => {
    const inputs: TransactionOutputReference[] = [
      { transaction: { id: "txId1" }, index: 0 },
      { transaction: { id: "txId2" }, index: 1 },
      { transaction: { id: "txId3" }, index: 2 },
    ];
    const txIds = ["txId2", "txId4"];

    const result = inputsContainReferenceTxIds(inputs, txIds);

    expect(result).toBe(true);
  });

  it("returns false if no input contains the reference txIds", () => {
    const inputs: TransactionOutputReference[] = [
      { transaction: { id: "txId1" }, index: 0 },
      { transaction: { id: "txId2" }, index: 1 },
      { transaction: { id: "txId3" }, index: 2 },
    ];
    const txIds = ["txId4", "txId5"];

    const result = inputsContainReferenceTxIds(inputs, txIds);

    expect(result).toBe(false);
  });

  it("returns false if inputs array is empty", () => {
    const inputs: TransactionOutputReference[] = [];
    const txIds = ["txId1", "txId2"];

    const result = inputsContainReferenceTxIds(inputs, txIds);

    expect(result).toBe(false);
  });

  it("returns false if txIds array is empty", () => {
    const inputs: TransactionOutputReference[] = [
      { transaction: { id: "txId1" }, index: 0 },
      { transaction: { id: "txId2" }, index: 1 },
      { transaction: { id: "txId3" }, index: 2 },
    ];
    const txIds: string[] = [];

    const result = inputsContainReferenceTxIds(inputs, txIds);

    expect(result).toBe(false);
  });
});
