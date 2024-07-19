import fs from "node:fs";
import readline from 'node:readline';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   terminal: false,
   prompt: 'OHAI> ',
});

rl.prompt();

rl.on('line', (line) => {

   switch (line.trim()) {
      case 'q':
         rl.close();
         break;

      default:
         console.log(`rl::'${line.trim()}'`);
         break;
   }

   rl.prompt();

}).on('close', () => {

   console.log('done');
   process.exit(0);

}); 
