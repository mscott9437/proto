
function setCookies(){

  const brandValue = document.cookie.split('; ').find(row => row.startsWith('brand=')).split('=')[1];
  document.getElementById('client').textContent = brandValue;

  const subValue = document.cookie.split('; ').find(row => row.startsWith('sub=')).split('=')[1];
  var request = window.indexedDB.open(subValue, 3);

}

const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('brand='))
  .split('=')[1];

var xhttp = new XMLHttpRequest();

xhttp.addEventListener('load', function() {

  document.cookie = "brand=" + JSON.parse(this.responseText).payload.brand;
  document.cookie = 'sub=' + JSON.parse(this.responseText).payload.sub + '; Secure; SameSite=none';

  console.log('okay');

  return false;

});

xhttp.open('GET', 'token.json');

xhttp.send();
