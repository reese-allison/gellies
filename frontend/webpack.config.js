const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

function buildConfig(env) {
  return{
    mode: env.development ? 'development' : env.production ? 'production' : null,
    entry: {
      main: path.resolve(__dirname, "src/index.js"),
      moji_animations: path.resolve(__dirname, "src/moji-animations.js")
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      library: {
        name: '[name]',
        type: 'umd'
      }
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
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|png|jpeg|jpg|svg|gif)$/,
          use: 'asset/resource'
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        chunks: ['main'],
        template: path.join(__dirname, "src", "index.html"),
        minify: true,
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-webfonts'
            }
          }
        ]
      }),
    ],
    resolve: {
      "alias": {
        "react": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
        "react/jsx-runtime": "preact/jsx-runtime"
      }
    }
  }
}

module.exports = buildConfig;
