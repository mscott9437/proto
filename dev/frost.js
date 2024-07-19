const fs = require('fs');
const http = require('http');

const port = 3000;
const host = 'localhost';

var token, response, reader;

const user = fs.createReadStream('user.json');

http.createServer((req, res) => {

   const { headers, method, url } = req;

   let body = [];

   req.on('data', (chunk) => { body.push(chunk) }).on('end', (err) => {

      res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT');
      res.setHeader('Access-Control-Allow-Credentials', 'true');

      body = Buffer.concat(body).toString();

      switch (req.url) {

         case '/':
            console.log(req.url);
            //reader = fs.createReadStream('proto.html');
            //reader.pipe(res);
            res.end('okay');
            break;

         case '/graph':
            if (req.method === "OPTIONS") {
               console.log('OPTIONS');
               res.statusCode = 200;
               res.end();
               break;
            }
            console.log(req.url);
            response = { headers, method, url, body };
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(response));
            //console.log(user);
            break;

         case '/login':
            console.log(req.url);
            response = { headers, method, url, body };
            token = response.body;
            res.statusCode = 200;
            res.end();
            break;

         case '/user.json':
            if (req.method === "OPTIONS") {
               console.log('OPTIONS');
               res.statusCode = 200;
               res.end();
               break;
            }
            console.log(req.url);
            reader = fs.createReadStream('user.json');
            reader.pipe(res);
            break;

         default:
            console.log('404');
            res.statusCode = 404;
            res.end();
            break;
      }

   })

}).listen(port, host, (err) => { console.log(`${host}:${port}`); });
