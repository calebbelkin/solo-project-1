const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //entry
  entry: "./src/index.js",

  //output
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  //   //dev server
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, "public"),
  //   },
  //   compress: true,
  //   port: 8080,
  //   proxy: {
  //     "/api/leaders": "http://localhost:3000",
  //   },
  // },

  //mode
  mode: "development",

  //modules
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};

//
