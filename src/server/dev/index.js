// Webpack Hot Module Reloading for development only.
import webpack from "webpack";
import webpackPlugin from 'hapi-webpack-plugin';
import webpackClientConfig from '../../../webpack.config.client.babel.js';

const register = (server, options, next) => {
  console.log(server.settings.app.env);
  if (server.settings.app.env !== 'development') {
    return next();
  }

  const compiler = webpack(webpackClientConfig);

  const assets = {
    noInfo: true,
    publicPath: "/assets/",
    quiet: false
  };

  const hot = {};

  server.register({
    register: webpackPlugin,
    options: {compiler, assets, hot}
  }, (error) => {
    if (error) {
      return console.error(error);
    }

    next();

  });

};

register.attributes = {
  name: 'dev'
};

export default register;
