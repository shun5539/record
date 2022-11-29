const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.tsx"), // 始まるところ
  output: {
    path: path.resolve(__dirname, "dist"), // distを本番環境
    filename: "index.js", // jsに変換
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".ts", ".tsx", ".js", ".css"],
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/],

        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: ["@babel/plugin-transform-runtime"], // fetchを使いたかったができなかったため後から追加した
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /src/,
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new Dotenv(),
  ],
  devServer: {
    port: 8111, // サーバー側とPORTが被らないように指定
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
    host: "0.0.0.0",
    allowedHosts: "all",
  },
};
