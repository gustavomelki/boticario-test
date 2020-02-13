module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  verbose: true,
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/*.{js,vue}",
    "src/views/*.{js,vue}",
    "!**/node_modules/**"
  ],
  coverageReporters: ["html", "text-summary"],
  moduleNameMapper: {
    "\\.(svg)$": "<rootDir>/tests/unit/__mocks__/svgMock.js"
  }
};
