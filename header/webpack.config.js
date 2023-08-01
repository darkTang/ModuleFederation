const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "header", // 标识模块联邦的名字
      filename: "remoteEntry.js", // 资源的名字
      remotes: {}, // 引用其他组件
      exposes: {
        // 暴露的模块，这个路径并不是基于当前应用的路径，而是基于在被引用的应用的路径
        "./Header": "./src/Header.js",
      },
      shared: {}, // 将共享的第三方库单独打包的一个模块中
    }),
  ],
};
