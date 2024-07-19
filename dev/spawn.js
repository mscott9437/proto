const {spawn}=require('child_process');

const subprocess=spawn(process.argv[0],['/srv/secure.js'],{

  detached:true,
  stdio:'ignore'

});

subprocess.unref();
