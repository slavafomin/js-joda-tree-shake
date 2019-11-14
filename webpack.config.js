
const { StatsWriterPlugin } = require('webpack-stats-plugin');


const projectPath = __dirname;


const webpackConfig = {
  entry: `${projectPath}/src/index.js`,
  output: {
    path: `${projectPath}/dist/webpack`,
  },
};

module.exports = [
  { ...webpackConfig,
    mode: 'development',
    output: {
      ...webpackConfig.output,
      filename: 'index.js',
    }
  },
  { ...webpackConfig,
    mode: 'production',
    output: {
      ...webpackConfig.output,
      filename: 'index.min.js',
    },
    plugins: [
      new StatsWriterPlugin({
        filename: 'stats.json',
        stats: {
          all: true,
          source: false,
          context: projectPath,
        },
      }),
    ],
  },
];
