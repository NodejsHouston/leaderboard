import webpack from "webpack";
import fs from "fs";
import path from "path";
import ReloadServerPlugin from "reload-server-webpack-plugin";

const nodeEnv = process.env.NODE_ENV;
const isDev = nodeEnv === 'development';
const isProd = nodeEnv === 'production';

const cwd = process.cwd();

const config = {
  target: "node",
  externals: fs.readdirSync("node_modules"),
  entry: path.join(cwd, "src/server/index.js"),
  output: {
    path: path.join(cwd, "dist/server/"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ],
        query: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: []
};

if (!isProd) {
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ReloadServerPlugin({
      script: "dist/server/index.js",
    }),
  )
}

if (isProd) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }),
    new webpack.NoErrorsPlugin(),
  );
}

export default config;
