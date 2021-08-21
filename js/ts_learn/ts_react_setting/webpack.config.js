const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./build"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
