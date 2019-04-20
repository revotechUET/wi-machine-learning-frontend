const path = require("path")
const BrowserSyncPlugin = require("browser-sync-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "src", "app.module.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "wipm.bundle.js"
  },
  mode: "development",
  watch: false,
  module: {
    rules: [{
      test: /\.html$/,
      use: ["html-loader"]
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    }, {
      test: /\.less$/,
      use: ["style-loader","css-loader","less-loader"],
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)$/, 
      loader: [{
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/images/",
          publicPath: "static/images/"
        }
      }]
    }],
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: {
        baseDir: __dirname
      },
    }),
    new CleanWebpackPlugin(["dist"])
  ]
}
