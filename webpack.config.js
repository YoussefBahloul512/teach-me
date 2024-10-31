const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "img/[name][ext]"
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[name][ext]"
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'excellent_students.html',
      template: 'src/excellent_students.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: 'src/login.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'signup.html',
      template: 'src/signup.html',
    }),
    new MiniCssExtractPlugin({ 
      filename: './css/style.css',
    }),
    new CssMinimizerPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 7633, // Change to avoid conflict
    open: true,
    historyApiFallback: true,
    hot: true
  }
};
