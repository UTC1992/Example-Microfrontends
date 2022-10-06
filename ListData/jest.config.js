module.exports = {
  verbose: true,
  bail: 1,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/path/to/dir/"
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    "global": {
      "branches": 50,
      "functions": 50,
      "lines": 70,
      "statements": 70,
      "ts-jest": {
        tsConfig: {
          allowJs: true,
        },
      },
    }
  },
  coverageReporters: ["text", 'coverage'],
  coverageDirectory: './',
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      isolatedModules: true
    }],
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|svg|woff|woff2)$": ["jest-transform-stub"]
  },
  testEnvironment: "jsdom",
  preset: 'ts-jest',
};
