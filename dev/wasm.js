import fs from "node:fs";

const source = fs.readFileSync("./add.wasm");
const typedArray = new Uint8Array(source);

const user = fs.createReadStream('./data.json');

WebAssembly.instantiate(typedArray, {
   env: {
      print: (result) => { console.log(`The result is ${result}`); }
   }}).then(result => {
   const add = result.instance.exports.add;
   const query = { name: "admin"};
   add(1, 2);
});
