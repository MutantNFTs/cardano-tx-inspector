import { toPubKeyHash } from "../toPubKeyHash";

describe("toPubKeyHash", () => {
  test("should convert a bech32 address to a pub key hash", () => {
    expect(
      toPubKeyHash(
        "addr1q8zem3e2kz7eqnwf5sct6zmdn5anctfjm73aead0l5cfqqh6q2ahx0pt07tggfstcj6nlwr9tj6txxlas7dpyl8ksjeqn8nrly"
      )
    ).toBe("c59dc72ab0bd904dc9a430bd0b6d9d3b3c2d32dfa3dcf5affd309002");
  });

  test("should convert a bech32 address to a pub key hash 2", () => {
    expect(
      toPubKeyHash(
        "addr1qy90qwru5gn5qgpm0prtesr0wy8aa5lggch7lvqn5lanpqxea0j84g88k8w6enxvc8xndtghfcdzkve24j3pk5aekr5s0ffqez"
      )
    ).toBe("0af0387ca22740203b7846bcc06f710fded3e8462fefb013a7fb3080");
  });
});
