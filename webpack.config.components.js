const webpack = require('webpack');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const asImport = require('postcss-import');
const calc = require('postcss-calc');

const entries = fs
  .readdirSync('./src/components/')
  .filter(file => file.match(/.*\.js$/));

const entry = {};
const externals = {};

for (let i = 0; i < entries.length; i++) {
  const file = entries[i];
  const name = file.replace(/\.js$/, '');
  entry[name] = `./src/components/${file}`;
  externals[`./${name}`] = `./${name}`;
}

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    libarray: 'ReactPacoUI',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  postcss(wp) {
    return [
      asImport({
        addDependencyTo: wp,
      }),
      precss,
      calc,
      autoprefixer,
    ];
  },
  externals: Object.assign({}, {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    classnames: {
      root: 'classNames',
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'classnames',
    },
  }, externals),
};
