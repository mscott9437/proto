
async function postData(url = '', data) {

const response = await fetch(url, {
  method: 'POST', // *GET, POST, PUT, DELETE
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
  },
  redirect: 'follow', // manual, *follow, error
  referrerPoliscy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: data
});

return response.json();

}

document.getElementById('contact').addEventListener('submit', (e) => {

  e.preventDefault();

  postData('https://127.0.0.1:8443', document.getElementById('key').value)
  .then(data => {
    console.log(data);
  });

});
