import { toAda } from "../toAda";

describe("toAda", () => {
  it("correctly converts Lovelace values into Ada", () => {
    expect(toAda(1500000n)).toBe(1.5);
    expect(toAda(5000000n)).toBe(5);
    expect(toAda(0n)).toBe(0);
  });

  it("handles large values correctly", () => {
    expect(toAda(1000000000000n)).toBe(1000000);
  });

  it("throws a range error when the input is negative", () => {
    expect(() => toAda(-1n)).toThrow(RangeError);
  });
});
