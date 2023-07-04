import { TxIn } from "@cardano-ogmios/schema";

import { inputsFilterByReferenceTxId } from "../inputsFilterByReferenceTxId";

describe("inputsFilterByReferenceTxId", () => {
  it("returns inputs that match the reference txIds", () => {
    const inputs = [
      { txId: "txId1", index: 0 },
      { txId: "txId2", index: 1 },
      { txId: "txId3", index: 2 },
    ];
    const txIds = ["txId2", "txId4"];

    const result = inputsFilterByReferenceTxId(inputs, txIds);

    expect(result).toEqual([{ txId: "txId2", index: 1 }]);
  });

  it("returns an empty array if no input matches the reference txIds", () => {
    const inputs = [
      { txId: "txId1", index: 0 },
      { txId: "txId2", index: 1 },
      { txId: "txId3", index: 2 },
    ];
    const txIds = ["txId4", "txId5"];

    const result = inputsFilterByReferenceTxId(inputs, txIds);

    expect(result).toEqual([]);
  });

  it("returns an empty array if inputs array is empty", () => {
    const inputs: TxIn[] = [];
    const txIds = ["txId1", "txId2"];

    const result = inputsFilterByReferenceTxId(inputs, txIds);

    expect(result).toEqual([]);
  });

  it("returns an empty array if txIds array is empty", () => {
    const inputs = [
      { txId: "txId1", index: 0 },
      { txId: "txId2", index: 1 },
      { txId: "txId3", index: 2 },
    ];
    const txIds: string[] = [];

    const result = inputsFilterByReferenceTxId(inputs, txIds);

    expect(result).toEqual([]);
  });
});
