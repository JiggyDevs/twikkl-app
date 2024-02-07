// Learn more https://docs.expo.io/guides/customizing-metro
console.log("bundling.......");

const { getDefaultConfig } = require("expo/metro-config");

/**
 * This is to avoid permission issues when running the expo server on Windows. <br>
 * Check [this GitHub issue.](https://github.com/expo/expo-cli/issues/2021#issuecomment-1239989633)
 * @returns {RegExp}
 */
const blackList =
  /.*git.*|.*android.*|.*__fixtures__.*|.*node_modules.*|.*react.*|.*dist.*|.*website\\node_modules.*|.heapCapture\\bundle.js|.*__tests__.*/gm;

// module.exports = {
//   resolver: {
//     blockList: blackList,
//     blackListRE: blackList,
//   },
// };

// module.exports = getDefaultConfig(__dirname);

console.log("bundling.......");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;
  // console.log({ resolver });

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg", "mjs"],
  };

  return config;
})();
