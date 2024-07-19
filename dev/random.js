
const crypto = require('crypto');

crypto.randomBytes(256, (err, buf) => {

  if (err) throw err;

  const hmac = crypto.createHmac('sha256', buf.toString('hex'));

  hmac.on('readable',() => {

    const data = hmac.read();

    if (data){

      console.log(data.toString('hex'));

    }

  });

  hmac.write('mscott9437@gmail.com');

  hmac.end();

  console.log(buf.toString('hex'));

});
