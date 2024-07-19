const http = require('node:http');
const fs = require('node:fs');

const port = 3000;
const host = 'localhost';

http.createServer((req, res) => {
   if (req.method === 'GET') {
      const data = fs.readFileSync('index.html', 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
   }
}).listen(port, () => {
   console.log(`${host}:${port}`);
});
