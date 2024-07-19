const https = require('https');
const fs = require('fs');
const process = require('process');

const options = {

  cert:fs.readFileSync('/srv/realmode.io.crt'),
  key:fs.readFileSync('/srv/domain.key')

};

https.createServer(options, function(req, res) {

  const {headers, method, url} = req;

  const queryObject = require('url').parse(url,true).query;

  let body = [];

  req.on('error', (err) => {

    console.error(err);

  }).on('data', (chunk) => {

    body.push(chunk);

  }).on('end', () => {

    body = Buffer.concat(body).toString();

    res.on('error', (err) => {

      console.error(err);

    });

    res.statusCode = 200;

    res.setHeader('Content-Type', 'application/json');

    const responseBody = {headers, method, url, body};

    res.write(JSON.stringify(responseBody));

    res.end();

  });

  console.log(queryObject.id);
  console.log(queryObject.sig);

}).listen(443, "2001:19f0:5401:878:5400:01ff:fee7:f35c", (err) => {

  if (process.getgid && process.setgid) {

    console.log(`Current gid: ${process.getgid()}`);

    try {

      process.setgid(1002);

      console.log(`New gid: ${process.getgid()}`);

    } catch (err) {

      console.log(`Failed to set gid: ${err}`);

    }

  }

  if (process.getuid && process.setuid) {

    console.log(`Current uid: ${process.getuid()}`);

    try {

      process.setuid(1002);

      console.log(`New uid: ${process.getuid()}`);

    } catch (err) {

      console.log(`Failed to set uid: ${err}`);

    }

  }

  console.log('2001:19f0:5401:878:5400:01ff:fee7:f35c');

});
