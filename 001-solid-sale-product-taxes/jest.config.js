module.exports = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  roots: ['./src/'],
  preset: 'ts-jest',
  transformIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '\\.(ts)$': 'ts-jest',
  },
}
