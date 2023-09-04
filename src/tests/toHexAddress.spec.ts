import { toHexAddress } from "../toHexAddress";

describe("toHexAddress", () => {
  test("should convert a bech32 address to a hex address", () => {
    expect(
      toHexAddress(
        "addr1q8zem3e2kz7eqnwf5sct6zmdn5anctfjm73aead0l5cfqqh6q2ahx0pt07tggfstcj6nlwr9tj6txxlas7dpyl8ksjeqn8nrly"
      )
    ).toBe(
      "01c59dc72ab0bd904dc9a430bd0b6d9d3b3c2d32dfa3dcf5affd309002fa02bb733c2b7f9684260bc4b53fb8655cb4b31bfd879a127cf684b2"
    );
  });
});
