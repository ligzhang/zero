const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
module.exports = {
  mode: "development",
  entry: {
    index: "./src/main.js",
    vendor: "./src/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    compress: true,
    proxy: {
      "/api/*": {
        target: "http://47.98.156.20:9999/",
        secure: false,
        changeOrigin: true
      },
      // fib
      "/fib": {
        target: "http://localhost:4008/",
        secure: false,
        changeOrigin: true
      },
      "/user": {
        target: "http://localhost:4008/",
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
    extensions: [".js", ".vue", ".json", ".css"]
  }
}
