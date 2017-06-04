const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const clean = plugins => plugins.filter(x => !!x);

const clean = plugins =>
  plugins.filter(x => !!x);

const CSSLoaderLocalIdentifier = isProduction =>
  (!isProduction ? '[folder]__[local]--[hash:base64:5]' : '[hash:base64]');

const CSSLoaderConfiguration = isProduction => ({
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: CSSLoaderLocalIdentifier(isProduction),
    sourceMap: isProduction,
    minimize: isProduction,
  },
});

module.exports = (options = {}) => {
  const isProduction = !!options.production;

  return {
    devtool: isProduction ? 'source-map' : 'eval',
    entry: `${__dirname}/src/index.js`,
    output: {
      path: `${__dirname}/dist`,
      publicPath: '/',
      filename: '[name].[hash:8].js',
    },
    performance: !isProduction ? false : {
      hints: 'warning',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  ['react-css-modules', {
                    generateScopedName: CSSLoaderLocalIdentifier(isProduction),
                  }],
                ],
              },
            },
            {
              loader: 'eslint-loader',
              options: {
                configFile: '.eslintrc',
                failOnError: isProduction,
                failOnWarning: isProduction,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          loader: !isProduction ? [
            { loader: 'style-loader' },
            CSSLoaderConfiguration(isProduction),
          ] : ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: CSSLoaderConfiguration(isProduction),
          }),
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ],
    },
    plugins: clean([
      new HtmlPlugin({
        inject: true,
        template: 'src/index.html',
      }),

      isProduction && new ExtractTextPlugin({
        filename: '[name].[hash:8].css',
        allChunks: true,
      }),

      isProduction && new webpack.optimize.OccurrenceOrderPlugin(),

      isProduction && new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),

      isProduction && new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
        mangle: {
          screw_ie8: true,
        },
        output: {
          comments: false,
          screw_ie8: true,
        },
      }),
    ]),
  };
};
