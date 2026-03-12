const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function buildConfig(env) {
  const isProduction = env.production;

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      main: path.resolve(__dirname, "src/index.js")
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: '[name].[contenthash].js',
      publicPath: isProduction ? '/gellies/' : '/',
      clean: true
    },
    devServer: {
      static: './dist',
      hot: true,
      historyApiFallback: true,
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', ['@babel/preset-react', { pragma: 'h', pragmaFrag: 'Fragment' }]]
            }
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|png|jpeg|jpg|svg|gif)$/,
          type: 'asset/resource'
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: "./src/favicon.ico",
        template: path.join(__dirname, "src", "index.html"),
        minify: isProduction
      }),
      new HtmlWebpackPlugin({
        filename: '404.html',
        template: path.join(__dirname, "src", "404.html"),
        inject: false,
        minify: isProduction
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/static', to: 'static' }
        ]
      })
    ],
    resolve: {
      alias: {
        "react": "preact/compat",
        "react-dom": "preact/compat",
        "react/jsx-runtime": "preact/jsx-runtime"
      }
    }
  }
}

module.exports = buildConfig;
