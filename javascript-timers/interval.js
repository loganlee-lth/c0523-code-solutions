const $h1 = document.querySelector('h1');
const nIntervId = setInterval(countDown, 1000);

function countDown() {
  if (+$h1.textContent > 1) {
    $h1.textContent = +$h1.textContent - 1;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(nIntervId);
  }
}
