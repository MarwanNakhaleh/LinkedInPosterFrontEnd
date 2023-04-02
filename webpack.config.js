const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "index.html",
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        },
      })
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    module: {
      rules: [
        {
          use: ["ts-loader"],
          test: /\.ts$|tsx/,
          exclude: [/node_modules/],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: [/node_modules/],
          use: ['file-loader?name=[name].[ext]']
        }
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
  };
};
