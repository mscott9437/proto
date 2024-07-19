const fs = require('fs');
const crypto = require('crypto');

const token = fs.readFileSync('token');

const hmac = crypto.createHmac('sha1', token);

hmac.on('readable', () => {

  const data = hmac.read();

  if(data){

    console.log(data.toString('hex'));

  }

});

hmac.write('realmodellc.com');

hmac.end();
