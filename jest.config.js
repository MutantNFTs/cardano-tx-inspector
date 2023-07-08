module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  workerThreads: true, // to handle bigint
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
