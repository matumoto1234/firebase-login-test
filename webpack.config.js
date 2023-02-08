const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;

console.log(process.env.NODE_ENV)

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(env),
    }),
  ],
};
