var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './app/main.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: 'http://seanconroy.co/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules|bower_components/, loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  resolve : {
    extensions: ['', '.js', '.json']
  },
  devtool: 'inline-source-map'
};



