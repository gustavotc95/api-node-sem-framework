const http = require('http');
const { URL } = require('url');

const routes = require('./routes');
const bodyParser = require('./helpers/bodyParser');

const portNumber = 3030;

const server = http.createServer((request, response) => {
  const parsedURL = new URL(`http://localhost:${portNumber}${request.url}`);
  console.log(
    `Request method ${request.method} | Endpoint: ${parsedURL.pathname}`
  );

  let { pathname } = parsedURL;

  let id = null;

  const splitEndpoint = pathname.split('/').filter(Boolean);

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const route = routes.find(
    (routeObject) =>
      routeObject.endPoint === pathname && routeObject.method === request.method
  );

  if (route) {
    request.query = Object.fromEntries(parsedURL.searchParams);
    request.params = { id };

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'text/html' });
      response.end(JSON.stringify(body));
    };

    if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response);
    }
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${parsedURL.pathname}`);
  }
});

server.listen(portNumber, () =>
  console.log(`Server started at http://localhost:${portNumber}`)
);
