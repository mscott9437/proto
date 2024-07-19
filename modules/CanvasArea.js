
class CanvasArea extends HTMLCanvasElement {constructor() {
 
  super();

} connectedCallback() {

	if (this.getContext) {
		var ctx = this.getContext('2d');

		ctx.fillStyle = 'rgb(200, 0, 0)';
		ctx.fillRect(10, 10, 50, 50);

		ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
		ctx.fillRect(30, 30, 50, 50);
	}

}}

customElements.define('canvas-area', CanvasArea, { extends: 'canvas' });

export { CanvasArea }
