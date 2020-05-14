// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js"],
  moduleNameMapper: {
    "^applicationRoot/(.*)$": "<rootDir>/src/$1",
  },
};
