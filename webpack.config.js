const path = require('path'); // Esto esta dentro de los recursos de Node
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Importamos EnvorinmentPlugin de webpack
const { EnvironmentPlugin } = require('webpack');

// Importamos y usamos dotenv
require('dotenv').config();



module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // resolve = me permite saber donde estoy en la carpeta y luego
    // creara la carpeta "dist" que es lo que va aenviarse a produccion
    filename: 'bundle.js', // Archivo resultante
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    // Que extensiones o elementos va a estar escuchando y analizar para preparar en este compilado
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          //'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new EnvironmentPlugin([
      'PAYPAL_CLIENT_ID',
      'GOOGLE_MAPS_API_KEY',
      //'API_URL',
    ]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
  devServer: {
    // devServer = Nos va a permitir crear un servidor de trabajo local
    allowedHosts: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3005,
  },
};
