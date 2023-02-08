const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  plugins: [
    new webpack.EnvironmentPlugin([
      "API_KEY",
      "AUTH_DOMAIN",
      "PROJECT_ID",
      "STORAGE_BUCKET",
      "MESSAGING_SENDER_ID",
      "APP_ID",
      "MEASUREMENT_ID",
    ]),
  ],
};
