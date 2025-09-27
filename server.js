const { createServer } = require('http');
const { parse } = require('path');

const server = createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello world');
  } else if (req.url === '/test') {
    res.end('TEST');
  } else {
    res.end('The URL cannot be found');
  }
});

server.listen(8000, () => console.log('Listening for requests on port 8000'));
