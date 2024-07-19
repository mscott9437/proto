const http = require('http');
const { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

http.createServer(function(req, res) {

  if (req.method === 'GET' && req.url === '/hello') {

    // Run the GraphQL query '{ hello }' and print out the response
    graphql(schema, '{ hello }', root).then((response) => {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT');
      console.log(JSON.stringify(response));
      res.end(JSON.stringify(response));
    });

  } else {

    const {headers, method, url} = req;

    // const queryObject = require('url').parse(url,true).query;

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
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT');

      const responseBody = {headers, method, url, body};

      res.write(JSON.stringify(responseBody));
      // if(responseBody.body == 'id=0&key=8xJNI5Ia1WYixBx0ZFBuD+jxVQQ='){res.write('okay')}else{res.write('no');}

      res.end();

    })

  };

  // console.log(queryObject.id);

}).listen(8888, (err) => {

  console.log('localhost:8888');

});
