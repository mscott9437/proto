const fs = require('fs');
const http = require('http');
var qs = require('querystring');

const port = 3000;
const host = 'localhost';

var token;

const user = fs.createReadStream('data.json');

http.createServer((req, res) => {

   const { headers, method, url } = req;

   let body = [];

   req.on('data', (chunk) => { body.push(chunk) }).on('end', (err) => {

      res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT');
      res.setHeader('Access-Control-Allow-Credentials', 'true');

      let response = { headers, method, url };

      let result = Buffer.concat(body).toString();

      switch (req.url) {

         case '/':
            console.log(req.url);
            res.writeHead(200, {'Content-Type': 'application/json'});
            user.pipe(res);
            break;

         case '/graph':
            if (req.method === "OPTIONS") {
               console.log('OPTIONS');
               res.statusCode = 200;
               res.end();
               break;
            }
            console.log(req.url);
            console.log(token);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(result);
            break;

         case '/login':
            console.log(req.url);
            token = qs.parse(result).csrf
            console.log(token);
            res.statusCode = 200;
            res.end();
            break;

         case '/favicon.ico':
            console.log(req.url);
            res.statusCode = 200;
            res.end();
            break;

         default:
            console.log(req.url);
            res.statusCode = 404;
            res.end();
            break;
      }

   })

}).listen(port, host, (err) => { console.log(`${host}:${port}`); });
