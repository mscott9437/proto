
document.onreadystatechange=function() {

  console.log('document.readyState = ' + document.readyState + ';');

  return false;

};

document.addEventListener('DOMContentLoaded', function() {

  console.info('DOM.load;');

  /* return startTime(); */

  return false;

});

window.addEventListener('load', function() {

  console.info('window.load;');

  return false;

});

console.log('document.readyState=' + document.readyState + ';');

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {

  if(xhttp.readyState > 1) {

    console.log('xhttp.readyState = ' + xhttp.readyState + ';');

  }

  return false;

};

xhttp.addEventListener('load', function() {

  console.log('xhttp.load;');

  /* document.getElementById('ui-5x').innerHTML = this.responseText; */
  document.getElementById('ui-5x').textContent = this.responseText;

  this.abort();

  console.log('xhttp.readyState=' + xhttp.readyState + ';');

  return false;

});

console.log('xhttp.readyState = ' + xhttp.readyState + ';');

console.error('System.Load');

/* xhttp.open('GET', 'http://localhost:8080/hello'); */

/* console.log('xhttp.readyState = ' + xhttp.readyState + ';'); */

/* xhttp.send(); */

/* document.getElementById('dat-1').addEventListener('click', function(){ */

  /* let val = document.getElementById('ui-0').innerHTML; */

  /* document.getElementById('dat-4').value = val; */

/* }); */
