
var xhttp = new XMLHttpRequest();

xhttp.addEventListener('load', function() {

  document.getElementById('ui-0').textContent = this.responseText;

  return false;

});

xhttp.open('GET', 'http://localhost:8080');

xhttp.send();

console.log('xhttp-send');
