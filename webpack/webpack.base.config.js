const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'whatwg-fetch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: 'app.[hash].js',
  },
  devtool: 'eval',
  module: {
    rules:
    [{
      test: /\.js$/,
      include: path.resolve(process.cwd(), 'src'),
      loader: 'babel-loader',
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader', // creates style nodes from JS strings
      }, {
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:8]', // translates CSS into CommonJS
      }, {
        loader: 'sass-loader', // compiles Sass to CSS
      }],
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[hash:base64:8]',
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loader: ['style-loader', 'css-loader'],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loaders: [
        'file-loader',
        'image-webpack-loader?{progressive:true, pngquant:{quality: "65-90", speed: 4}}',
      ],
    }],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: './index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      debug: true,
      options: {
        postcss: () => [precss, autoprefixer],
        context: path.join(__dirname, 'src'),
        output: {
          path: path.join(__dirname, 'dist'),
        },
      },
    }),
  ],
}
