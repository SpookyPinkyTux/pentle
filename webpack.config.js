const path = require("path");

module.exports = {
  entry: "./public/ts/mainPage.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "mainPage.js",
    path: path.resolve(__dirname, "public/distSrc"),
  },
};
