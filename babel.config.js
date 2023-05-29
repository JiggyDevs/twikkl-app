module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
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
      "react-native-paper/babel",
      require.resolve("expo-router/babel"),
      'react-native-reanimated/plugin',
    ],
  };
};
