module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // test: './node_modules/ethers',
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
      [
        "module-resolver",
        {
          "root": ["./src"],
          "extensions": [
            ".ts",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          "alias": {
            "@twikkl": "./src",
            "@assets": "./assets",
          },
        },
      ],
      // "@babel/plugin-transform-flow-strip-types",
      // [
      //   "@babel/plugin-transform-private-methods",
      //   {
      //     "loose": true
      //   }
      // ],
      require.resolve("expo-router/babel"),
      'react-native-reanimated/plugin'

    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel', "transform-remove-console"],
      },
    }
  };
};
