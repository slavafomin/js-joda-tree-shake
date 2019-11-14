
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');


const isProduction = ('production' === process.env.NODE_ENV);
const isDebug = !!process.env.DEBUG_BUILD;

const projectPath = __dirname;



const webpackConfig = {
  mode: (isProduction ? 'production' : 'development'),
  entry: {
    main: `${projectPath}/src/index.js`,
  },
  output: {
    path: `${projectPath}/dist`,
    filename: '[name].[hash].js',
  },
  devtool: (isProduction ? 'source-map' : 'inline-source-map'),
  module: {
    rules: [],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: (isProduction && !isDebug),
    concatenateModules: (isProduction && !isDebug),
  },
};

if (isDebug) {
  webpackConfig.plugins.push(
    new StatsWriterPlugin({
      filename: 'stats.json',
      stats: {
        all: true,
        source: false,
        context: projectPath,
      },
    })
  );
}

module.exports = webpackConfig;
