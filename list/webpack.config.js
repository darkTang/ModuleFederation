const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "list",
      filename: "remoteEntry.js",
      remotes: {
        header: "header@http://localhost:3000/remoteEntry.js",   // 远程组件访问路径，name@url/远程组件的资源路径
      },
      exposes: {
        './List': './src/List.js'
      },
      shared: {},
    }),
  ],
};
