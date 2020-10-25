const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');

module.exports = {
  mode: NODE_ENV,
  entry: './blocks/blocks.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'blocks.build.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};
