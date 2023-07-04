import { utxosGetAddresses } from "../utxosGetAddresses";

describe("utxosGetAddresses", () => {
  it("returns unique addresses from the given utxos", async () => {
    const utxos = [
      { address: "addr1" },
      { address: "addr2" },
      { address: "addr1" },
      { address: "addr3" },
    ];

    const result = await utxosGetAddresses(utxos);

    expect(result).toEqual(["addr1", "addr2", "addr3"]);
  });
});
