const path = require('path');

module.exports = {
  entry: './src/static/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist', 'static'),
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: [
          path.resolve(__dirname, 'src', 'static'),
        ],
        loader: 'babel-loader',
      },
    ],
  },
};
