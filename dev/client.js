import net from 'node:net';

const port = 3001;

const client = net.createConnection({ port: port }, () => { // { path: '/tmp/echo.sock' }

   console.log('connected to server');
   client.write('world');

});

client.on('data', (data) => {

   console.log(data.toString());
   client.end();
   //client.destroy();

});

client.on('end', () => {

   console.log('disconnected from server');

});
