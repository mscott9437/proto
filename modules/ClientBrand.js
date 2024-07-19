
class ClientBrand extends HTMLElement {constructor() {

	super();

	let template = document.getElementById('client-brand');
	let templateContent = template.content;

	const shadowRoot = this.attachShadow({mode: 'open'})
	  .appendChild(templateContent.cloneNode(true));

}}

customElements.define('client-brand', ClientBrand);

export { ClientBrand }
