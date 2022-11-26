const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, './dist');
const entryPath = './src/index.js';

module.exports = {
 entry: entryPath,
 output: {
  path: outputPath,
  filename: 'bundle[hash].js'
 },
 resolve: {
  extensions: ['.js', '.jsx']
 },
 module: {
  rules: [
   {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
   },
   {
    test: /\.html$/,
    use: 'html-loader'
   },
   {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
   },
   {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader']
   }
  ]
 },
 plugins: [
  new HTMLWebpackPlugin({
   inject: 'body',
   template: './public/index.html'
  })
 ]
};