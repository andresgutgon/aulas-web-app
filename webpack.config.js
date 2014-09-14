var webpack = require("webpack");

module.exports = {
  cache: true,
  entry: "./app/javascripts/app.js",
  output: {
    path: __dirname + "/app",
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.js$/, loader: "jsx-loader" }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/)
  ]
};
