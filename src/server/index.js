import {Server} from "hapi";
import good from "good";
import inert from "inert";
import base from "./base";
import dev from "./dev";

const env = process.env.NODE_ENV || 'development'

const server = new Server();

server.connection({
  port: parseInt(process.env.PORT, 10) || 3000,
  host: '0.0.0.0',
  router: {
    stripTrailingSlash: true
  }
});

server.settings.app = {
    env: env
};

/*
  Load all plugins and then start the server.
  First: community/npm plugins are loaded
  Second: project specific plugins are loaded
 */
server.register([
  {
    register: good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
  },
  {
    register: dev
  },
  {
    register: inert
  },
  {
    register: base
  }
], (error) => {
  if (error) {
    return console.error(error);
  }

  server.start(() => console.log('Server running at:', server.info.uri));
});
