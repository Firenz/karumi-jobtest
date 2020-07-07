const { merge } = require("webpack-merge");
const base = require("./base.webpack.config");

module.exports = merge(base, {
  mode: "development",
  watch: true,
  output: {
    filename: "./js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]"
              },
              localsConvention: "camelCase"
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist', // Content base
    inline: true, // Enable watch and live reload
    host: 'localhost',
    port: 9000,
    liveReload: true,
    historyApiFallback: true,
    writeToDisk: true,
    stats: 'errors-only',
  },
});