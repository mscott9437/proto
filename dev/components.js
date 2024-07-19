
// element-container

function elementContainer() {

let el = document.getElementById('element-container');

var shadow = el.attachShadow({mode: 'open'});

let style = document.createElement('style');

style.textContent = `
  div {
  }`;

let para = document.createElement('div');

para.innerHTML = `
element-container
`;

shadow.appendChild(style);
shadow.appendChild(para);

}

elementContainer();

// null-shadow

class NullShadow extends HTMLElement {
  static get disabledFeatures() { return ['shadow']; }
  constructor() {
    super();

  }
  connectedCallback(){}
}

customElements.define('null-shadow', NullShadow);

// custom-element

class CustomElement extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({mode: 'open'});

    let style = document.createElement('style');

    style.textContent = `
      div {
      }`;

    let para = document.createElement('div');

    para.innerHTML = `
    custom-element
    `;

    shadow.appendChild(style);
    shadow.appendChild(para);
  }
  connectedCallback(){}
}

customElements.define('custom-element', CustomElement);

// pseudo-element

class PseudoElement extends HTMLParagraphElement {
  constructor() {
    super();

  }
  connectedCallback(){}
}

customElements.define('pseudo-element', PseudoElement, { extends: 'p' });

// shadow-template

class ShadowTemplate extends HTMLElement{
  constructor() {
    super();
    let template = document.getElementById('shadow-template');
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));
  }
  connectedCallback(){}
}

customElements.define('shadow-template', ShadowTemplate);

// slotted-template

class SlottedTemplate extends HTMLElement{
  constructor() {
    super();
    let template = document.getElementById('slotted-template');
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));
  }
  connectedCallback(){}
}

customElements.define('slotted-template', SlottedTemplate);

// template-clone

if ('content' in document.createElement('template')) {

  var el = document.getElementById('template-clone');
  var template = document.getElementById('tmp-template-clone');

  var clone = template.content.cloneNode(true);

  el.appendChild(clone);

} else {}

// examples

import './base.css'
import './custom.scss'

import './proto.js'

import './src/main.js'

import { ClientBrand } from './ClientBrand.js'
import { ContactForm } from './ContactForm.js'
import { FormContents } from './FormContents.js'
import { RealMode } from './RealMode.js'

// shadow.getElementById('background').style.backgroundImage = 'linear-gradient(gray, gray), url(' + imgUrl + ')';

// import imgUrl from './assets/poster-2x.jpg'

class ClientBrand extends HTMLElement{
  constructor() {
    super();

    var shadow = this.attachShadow({mode: 'open'});

    shadow.innerHTML = `
      <style>

        #background {
          height: 46em;
          background-blend-mode: multiply;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        #animation {
          text-align: center;
          color: white;
          background-color: rgba(112, 128, 144, 0.35);
          animation-duration: 3s;
          animation-name: slidein;
        }

        @keyframes slidein {
          from {
            margin-left: 50%;
          }
          to {
            margin-left: 0%;
          }
        }

      </style>

      <div id="background"><div id="animation">

        <slot name="id">client-brand</slot>

      </div></div>
    `;

    shadow.getElementById('background').style.backgroundImage = 'linear-gradient(gray, gray), url(' + imgUrl + ')';
  }
}

import imgUrl from './img/poster-2x.jpg'

customElements.define('client-brand', ClientBrand);

export { ClientBrand }

class ClientBrand extends HTMLElement{
  constructor() {
    super();
    let template = document.getElementById('client-brand');
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));
  }
}

customElements.define('client-brand', ClientBrand);

class FormContents extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({mode: 'open'});

    shadow.innerHTML = `
      <style>

        #form {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }

      </style>

      <div id="form">

        <div class="label">

          <slot name="label-0"></slot>

        </div><div class="input">

          <slot name="input-0"></slot>

        </div><div class="label">

          <slot name="label-1"></slot>

        </div><div class="input">

          <slot name="input-1"></slot>

        </div><div class="submit">

          <slot name="submit"></slot>

        </div>

      </div>
    `;
  }
}

customElements.define('form-contents', FormContents);

export { FormContents }

class FormContents extends HTMLElement{
  constructor() {
    super();
    let template = document.getElementById('form-contents');
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({mode: 'open'})
      .appendChild(templateContent.cloneNode(true));
  }
}

customElements.define('form-contents', FormContents);

class RealMode extends HTMLElement{
  constructor() {
    super();

    var shadow = this.attachShadow({mode: 'open'});

    shadow.innerHTML = `
      <style>

        #container {
          display: flex;
        }

        #text {
          width: 100%;
          color: white;
          background-color: rgba(112, 128, 144, 0.75);
        }

      </style>

      <div id="container"><div id="text">

        <slot name="id"></slot>

      </div></div>
    `;

    let user = document.createElement('input');
    let array = new Uint32Array(1);
    window.crypto.getRandomValues(array);

    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }

    user.hidden = true;
    user.value = array[0];
    
    document.cookie = 'token=' + array[0] + '; Secure';

    shadow.appendChild(user);
  }
}

customElements.define('real-mode', RealMode);

export { RealMode }

class RealMode extends HTMLElement{
  constructor() {
    super();
    let template = document.getElementById('real-mode');
    let templateContent = template.content;

    var shadow = this.attachShadow({mode: 'open'});

    let user = document.createElement('input');
    let array = new Uint32Array(1);
    window.crypto.getRandomValues(array);

    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }

    user.hidden = true;
    user.value = array[0];
    
    document.cookie = 'token=' + array[0] + '; Secure';

    shadow.appendChild(templateContent.cloneNode(true));
    shadow.appendChild(user);
  }
}

customElements.define('real-mode', RealMode);

class ContactForm extends HTMLFormElement {
  constructor() {
    super();

    this.addEventListener('submit', logSubmit);
  }
}

function logSubmit(event) {
  console.log(`submit: ${event.timeStamp} - Form-0: ${document.getElementById('form-container').elements['form-0'].value} - Form-1: ${document.getElementById('form-container').elements['form-1'].value}`);
  // event.preventDefault();
}

customElements.define('contact-form', ContactForm, { extends: 'form' });
