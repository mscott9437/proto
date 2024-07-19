import { ClientBrand } from './src/ClientBrand.js'
import { ContactForm } from './src/ContactForm.js'
import { CanvasArea } from './src/CanvasArea.js'
import { UserInfo } from './src/UserInfo.js'
import { ScrollBuffer } from './src/ScrollBuffer.js'

import './src/LoadCredentials.js'
import './src/ServiceWorker.js'

// intersection-observer

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

function callback (entries, observer) {
  console.log(observer);
  
  // document.querySelector('#content').classList.toggle('animate');

  entries.forEach(entry => {
    console.log(entry);
  });
}

let observer = new IntersectionObserver(callback, options);
// observer.observe(document.querySelector('#content'));
// observer.unobserve(document.querySelector('#content'));
