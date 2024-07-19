
class ContactButton extends HTMLButtonElement {constructor() { super(); } connectedCallback() {

this.onclick = function() {

	fetch('user.json')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			document.querySelector('#response').textContent = data.user.greeting;
		})

}

}} export { ContactButton }
