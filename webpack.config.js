const path = require('path')

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  },
  entry: {
    'main': './src/index.js'
  },
  mode: 'production', //this value should be 'production' or 'development'
  module: {
    rules: [
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
  ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  }
}