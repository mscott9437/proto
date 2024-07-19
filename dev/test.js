const fs = require('fs');
const http = require('http')

const server = http.createServer((req, res) => {

  fs.readFile('test.htm', (err, data) => {

    if (err) throw err;

    res.writeHead(200, {

      'Content-Length': Buffer.byteLength(data),
      'Content-Type': 'text/html'

    }).end(data);

  });

}).listen(3000, '127.0.0.1', (err) => {

  if (err) throw err;

  console.log('http://127.0.0.1:3000');

});
