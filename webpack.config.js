const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/dist/',
    proxy: {
      '/': 'http://localhost:3000/'
    }
  },
  module: {
    rules: [
      { test: /.(js|jsx)$/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }, 
        exclude: /node_modules/ },
      {
        test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader" ],
      },
    ]
  },
  mode: process.env.NODE_ENV,

}