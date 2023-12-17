const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new BrowserSyncPlugin(
      {
        // browse to http://localhost:3000/ during development
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:8080/",
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false,
      },
    ),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/img/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
    ],
  },
};
