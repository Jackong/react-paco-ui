const webpack = require('webpack');
const fs = require('fs');

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
  externals[`paco-ui/css/${name}.css`] = `paco-ui/css/${name}.css`;
}

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
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
    'react-css-modules': {
      commonjs: 'react-css-modules',
      commonjs2: 'react-css-modules',
      amd: 'react-css-modules',
    },
  }, externals),
};
