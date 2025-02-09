// filepath: /d:/src/github/zhenjiao2/IMChat/craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = webpackConfig.ignoreWarnings || [];
      webpackConfig.ignoreWarnings.push({
        module: /node_modules/,
        message: /Critical dependency: require function is used in a way in which dependencies cannot be statically extracted/
      });
      return webpackConfig;
    },
  },
};