const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '-'
    }
  },
  entry: {
    main: [
      './src/assets/css/main.scss',
      './src/assets/js/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/assets'),
    filename: '[name].js',
    chunkFilename: `[name].js?version=${Date.now()}`
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        extract: true,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, 'src/assets/js/lib'),
      utils: path.resolve(__dirname, 'src/assets/js/utils'),
      modules: path.resolve(__dirname, 'src/modules'),
      vue: process.env.ENV === 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin()
    new CopyPlugin({
      patterns: [
        { from: './src/assets/css/custom.scss.liquid' },
        { from: './src/assets/js/custom.js.liquid' }
      ]
    })
  ]
}
