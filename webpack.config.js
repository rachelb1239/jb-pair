const path = require('path');

module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9001
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
       }
    ]
  }
};