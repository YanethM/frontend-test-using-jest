module.exports = {
    roots: ["<rootDir>/src"],
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/mocks/**",
    ],
    coveragePathIgnorePatterns: [],
    setupFilesAfterEnv: ["./config/jest/setupTests.js"], // Verifica que esta ruta sea correcta
    testEnvironment: "jsdom",
    modulePaths: ["<rootDir>/src"],
    transform: {
      "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js",
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
    moduleNameMapper: {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
      "^.+\\.(svg)$": "<rootDir>/src/__mocks__/fileMock.js",
    },
    moduleFileExtensions: [
      "tsx",
      "ts",
      "web.js",
      "js",
      "web.ts",
      "web.tsx",
      "json",
      "web.jsx",
      "jsx",
      "node",
    ],
    watchPlugins: [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname",
    ],
    resetMocks: true,
  };