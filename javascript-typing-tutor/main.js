const $char = document.querySelectorAll('span');
let index = 0;

function keystroke(event) {
  if (index === $char.length - 1 && $char[index].textContent === event.key) {
    $char[index].className = 'correct';
    index = null;
  } else if ($char[index].textContent === event.key) {
    $char[index].className = 'correct';
    $char[index + 1].className = 'current';
    index++;
  } else if ($char[index].textContent !== event.key) {
    $char[index].className = 'incorrect';
  }
}

document.addEventListener('keydown', keystroke);
