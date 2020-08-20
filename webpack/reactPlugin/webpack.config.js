const HtmlWebPackPlugin = require("html-webpack-plugin");
const DemoPlugin = require("./plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "./replaceLoader.js", "babel-loader",
        ]
      },
      {
        test: /\.txt$/i,
        exclude: /node_modules/,
        use: [
          "./txtLoader.js", "./replaceLoader.js"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new DemoPlugin(),
  ]
};
