
var loadCredentials = new XMLHttpRequest();

loadCredentials.addEventListener('load', function(){

  document.querySelector('#form-0').value=this.response.payload.sub;
  document.querySelector('#form-1').value=this.response.token.key;
  document.querySelector('#form-2').value=this.response.message.raw;

  console.log(this.response.payload.brand);
  console.log(this.response);

  return false;

});

loadCredentials.open('GET', 'auth.json');
loadCredentials.responseType = 'json';
loadCredentials.send();
