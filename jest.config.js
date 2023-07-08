module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  workerThreads: true, // to handle bigint
  collectCoverageFrom: [
    './src/*.ts',
    '!**/node_modules/**',
    '!./src/__utils/**',
    '!./src/index.ts',
    '!./src/types.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
