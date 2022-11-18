// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const directory = '04-latest-data'
// const CompressionPlugin = require('compression-webpack-plugin')
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = MiniCssExtractPlugin.loader

const config = {
  entry: {
    config: './' + directory + '/src/ts/config.ts',
    desktop: './' + directory + '/src/ts/desktop.ts'
  },
  output: {
    path: path.resolve('./' + directory + '/src/', 'js')
    // path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['ja']
    })
    // new CompressionPlugin({
    //   test: /\.(css)|(js)$|(ts)$/,
    //   compressionOptions: {
    //     level: 9
    //   }
    // })

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...']
    // plugins: [
    //   new TsconfigPathsPlugin({
    //     // tsconfig.json はデフォルト
    //     configFile: 'tsconfig.json'
    //   })
    // ]
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 4000000
  }
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
  } else {
    config.mode = 'development'
  }
  return config
}
