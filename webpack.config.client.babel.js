import webpack from "webpack";
import path from "path";

const nodeEnv = process.env.NODE_ENV;
const isDev = nodeEnv === 'development';
const isProd = nodeEnv === 'production';

const cwd = process.cwd();

const config = {
  isDev: isDev,
  devtool: 'source-map',
  entry: (isDev ? [
      // Development entry points
      "webpack-hot-middleware/client",
    ] : [
      // Production entry points
    ]).concat([
      path.join(cwd, "src/client/index.js")
    ]),
  output: {
    path: path.join(cwd, "dist/client"),
    filename: "bundle.js",
    libraryTarget: "var",
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [],
  target: "web"
};

if (!isProd) {
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
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
    new webpack.NoErrorsPlugin()
  );
}

export default config;
