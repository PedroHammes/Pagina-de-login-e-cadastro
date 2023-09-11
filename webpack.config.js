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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          //Create `style` nodes form JS strings
          "style-loader",
          //Translates CSS into CommonJS
          "css-loader",
          //Compiles Sass to CSS
          "sass-loader",
        ]
      }
  ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  }
}