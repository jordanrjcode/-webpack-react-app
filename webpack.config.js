const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: "production",
  module: {
    rules: [
      { test: /\.(css)$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(js|jsx)$/i, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(png|jpe?g|ico|gif|webp)$/i, use: ["file-loader"] },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin({
      logo: "./public/favicon.png",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: true,
    }),
    new Dotenv({
      path: "./.env",
    }),
  ],
  performance: {
    hints: false,
  },
  devServer: {
    historyApiFallback: true,
  },
};
