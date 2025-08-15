const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // Add this rule for SCSS files
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader',   // Interprets CSS
          'sass-loader',  // Compiles SCSS to CSS using sass
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/svg/',
          },
        },
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: './index.html',
    }),
  ],
};