const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "search",
      filename: "remoteEntry.js",
      remotes: {
        header: "header@http://localhost:3000/remoteEntry.js",
        list: "list@http://localhost:3001/remoteEntry.js"
      },
      exposes: {},
      shared: {},
    }),
  ],
};
