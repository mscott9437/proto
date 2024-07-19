import net from 'node:net';

const port = 3001;
const host  = 'localhost';

net.createServer((c) => {

   console.log('client connected');

   c.on('end', () => {
      console.log('client disconnected');
   });

   c.pipe(c);
   c.write('hello');
   console.log(c);

}).on('error', (err) => {

   throw err;

}).listen(port, () => { // '/tmp/echo.sock'

  console.log(`${host}:${port}`);

});
