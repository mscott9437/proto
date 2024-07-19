
class ContactForm extends HTMLFormElement {constructor() {

	super();

} connectedCallback() {

	async function postData(url = '', data = {}) {
		const response = await fetch(url, {
		  method: 'POST', // *GET, POST, PUT, DELETE
		  mode: 'cors', // no-cors, *cors, same-origin
		  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		  credentials: 'same-origin', // include, *same-origin, omit
		  headers: {
		  'Authorization': 'Bearer asdf',
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		  // 'Content-Type': 'application/x-www-form-urlencoded',
		  },
		  redirect: 'follow', // manual, *follow, error
		  referrerPoliscy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		  body: JSON.stringify(data)
		});

		return response.json();
	}

	this.addEventListener('submit', (e) => {
		e.preventDefault();

		postData('http://localhost:8888', { answer: 42 })
		  .then(data => {
			 console.log(data);
			 console.log(data.body);
			 console.log(data.headers.authorization);
		  });
	});

}}

customElements.define('contact-form', ContactForm, { extends: 'form' });

export { ContactForm }
