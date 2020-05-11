const path = require('path');
const webpack = require('webpack');

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
  plugins: [
    // Fixes React Router DOM error with __DEV__
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: [
          path.resolve(__dirname, 'src', 'static'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'node_modules', 'react-router-dom'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-proposal-class-properties'],
            presets: [
              // '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
};
