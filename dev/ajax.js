
document.getElementById('info').addEventListener('click', function() {

var xhttp = new XMLHttpRequest();

xhttp.addEventListener('load', function() {

  console.log(JSON.parse(this.responseText).url);

  return false;

});

xhttp.open('GET', 'https://127.0.0.1:8443');

xhttp.send();

console.log('okay');

});
