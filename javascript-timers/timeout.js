const $h1 = document.querySelector('.message');

setTimeout(() => {
  $h1.textContent = 'Hello There';
}, 2.0 * 1000);
