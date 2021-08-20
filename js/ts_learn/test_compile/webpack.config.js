var path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.ts",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
};
