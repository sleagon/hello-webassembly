const path = require('path');
module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.jsx', '.scss', '.css', '.wasm'],
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.wasm$/,
            loaders: ['wasm-loader']
          },
          {
            test: /\.jsx|\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.s?css$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
          {
            test: /\.svg$/,
            use: 'raw-loader',
          },
        ],
      },
    ],
  },
  plugins: [],
};
