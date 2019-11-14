
const babelPlugin = require('rollup-plugin-babel');
const commonJsPlugin = require('rollup-plugin-commonjs');
const nodeResolvePlugin = require('rollup-plugin-node-resolve');
const { terser: terserPlugin } = require('rollup-plugin-terser');
const { uglify: uglifyPlugin } = require('rollup-plugin-uglify');


module.exports = [
  {
    input: 'src/index.js',
    output: {
      file: './dist/rollup/index.js',
      format: 'cjs',
    },
    plugins: [
      nodeResolvePlugin(),
      commonJsPlugin(),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: './dist/rollup/index.terser.js',
      format: 'cjs',
    },
    plugins: [
      nodeResolvePlugin(),
      commonJsPlugin(),
      terserPlugin()
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: './dist/rollup/index.uglify.js',
      format: 'cjs',
    },
    plugins: [
      nodeResolvePlugin(),
      commonJsPlugin(),
      babelPlugin({
        presets: ['@babel/preset-env'],
      }),
      uglifyPlugin(),
    ],
  }
];
