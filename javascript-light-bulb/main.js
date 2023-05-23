const $lightBulb = document.querySelector('.light-on');
const $background = document.querySelector('.background');

function clickBulb(event) {
  if ($lightBulb.className === 'light-on') {
    $lightBulb.className = 'light-off';
    $background.style.backgroundColor = 'rgb(17, 17, 17)';
  } else {
    $lightBulb.className = 'light-on';
    $background.style.backgroundColor = 'rgb(254,249,241)';
  }
}

$lightBulb.addEventListener('click', clickBulb);
