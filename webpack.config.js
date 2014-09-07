var webpack = require("webpack");

module.exports = {
  cache: true,
  entry: "./app/javascripts/app.jsx",
  output: {
    path: __dirname + "/app",
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx$/
      , loader: "jsx-loader"
      }
    ]
  }
};
