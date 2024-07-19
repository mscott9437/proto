
class UserInfo extends HTMLInputElement {constructor() {

	super();

} connectedCallback() {

	var array = new Uint32Array(1);

	window.crypto.getRandomValues(array);

	for (var i = 0; i < array.length; i++) {
	  console.log(array[i]);
	}

	this.textContent = array[0];

	document.cookie = 'rand=' + array[0] + '; Secure; SameSite=strict';

}}

customElements.define('user-info', UserInfo, { extends: 'input' });

export { UserInfo }
