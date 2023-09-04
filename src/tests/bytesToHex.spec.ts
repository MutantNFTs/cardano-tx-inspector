import { bytesToHex } from "../bytesToHex";

describe("bytesToHex", () => {
  test("should convert an array of bytes to hex string", () => {
    expect(bytesToHex([0, 1, 254])).toBe("0001fe");
  });
});
