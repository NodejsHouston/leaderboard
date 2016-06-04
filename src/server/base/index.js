const register = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/assets/{path*}',
    config: {
      handler: {
        directory: { path: './dist/client' }
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/{path*}',
    config: {
      handler: (request, reply) => {

        const layout = `
          <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
              <link rel='shortcut icon' type='image/x-icon' href='/assets/images/favicon.ico' />
              <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css" crossorigin="anonymous">
              <title>
                Code Node - Node.js Houston
              </title>
            </head>
            <body>
              <div id="app"></div>
              <script src="/assets/bundle.js" async></script>
            </body>
          </html>
        `;

        return reply(layout);

      }
    }
  });

  return next();
};

register.attributes = {
  name: 'base'
};

export default register;
