const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/index.html', 
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Para archivos CSS
        use: ['style-loader', 'css-loader'], // Usar style-loader y css-loader
      },
      {
        test: /\.svg$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Para imágenes
        type: 'asset/resource', // Usar el recurso para manejar las imágenes
      },
      {
        test: /\.js$/, // Para archivos JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usar babel-loader para transpilar JavaScript
        },
      },
    ],
  },
};