
class ScrollBuffer extends HTMLElement {constructor() {

	super();

	let template = document.getElementById('scroll-buffer');
	let templateContent = template.content;

	const shadowRoot = this.attachShadow({mode: 'open'})
	  .appendChild(templateContent.cloneNode(true));

} connectedCallback() {

	var lastKnownScrollPosition = 0;
	var ticking = false;

	function doSomething(scrollPos) {
	  document.querySelector('.scroll-buffer').textContent = scrollPos;
	}

	document.addEventListener('scroll', function(e) {
		lastKnownScrollPosition = window.scrollY;
		if (!ticking) {
			window.requestAnimationFrame(function() {
			  doSomething(lastKnownScrollPosition);
			  ticking = false;
			});
			ticking = true;
		}
	});

}}

customElements.define('scroll-buffer', ScrollBuffer);

export { ScrollBuffer }
