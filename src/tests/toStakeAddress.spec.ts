import { toStakeAddress } from "../toStakeAddress";

describe("toStakeAddress", () => {
  it("keeps the same addr when there is no stake key", () => {
    const result = toStakeAddress(
      "addr1w8cvzcnclvkua25vx26j72pddatuedsxspm62mr63urs0fctuuzfv",
      "mainnet"
    );

    expect(result).toBe(
      "addr1w8cvzcnclvkua25vx26j72pddatuedsxspm62mr63urs0fctuuzfv"
    );
  });

  it("converts a mainnet payment address into a stake address", () => {
    const result = toStakeAddress(
      "addr1qxsgae4x0z3q0hjjqcwya7vzp9f9ex52lrly0wadmfgvhpfyzttqmp0evfcrwxkda77m5lg8c9ta2aafdf83jxyvhw3sgp9v30",
      "mainnet"
    );

    expect(result).toBe(
      "stake1uyjp94sdshukyuphrtx7l0d605ruz474w75k5ncerzxthgc4mghs5"
    );
  });

  it("converts a testnet payment address into a stake address", () => {
    const result = toStakeAddress(
      "addr_test1qq7rrku33z0d8gcp4xkwa4r0ze2ru2qznhma7twlmv3mj4gdefwpxl0d4a8ld3n56urgxxrc9tqnz6qd52wpdywwnt4qqegjsf",
      "testnet"
    );

    expect(result).toBe(
      "stake_test1uqxu5hqn0hk67nlkce6dwp5rrpuz4sf3dqx698qkj88f46skj0yar"
    );
  });

  it("defaults to mainnet if no network is specified", () => {
    const result = toStakeAddress(
      "addr1qxsgae4x0z3q0hjjqcwya7vzp9f9ex52lrly0wadmfgvhpfyzttqmp0evfcrwxkda77m5lg8c9ta2aafdf83jxyvhw3sgp9v30"
    );

    expect(result).toBe(
      "stake1uyjp94sdshukyuphrtx7l0d605ruz474w75k5ncerzxthgc4mghs5"
    );
  });
});
