const $pokemonImages = document.querySelectorAll('.pokemon-img');

let imageIndex = 0;

console.log($pokemonImages[4]);
console.log($pokemonImages[0].classList.add);

function showNext() {
  imageIndex++;
  if (imageIndex >= $pokemonImages.length) {
    $pokemonImages[$pokemonImages.length - 1].classList.add('hide');
    imageIndex = 0;
    $pokemonImages[imageIndex].classList.remove('hide');
  } else {
    $pokemonImages[imageIndex].classList.remove('hide');
    $pokemonImages[imageIndex - 1].classList.add('hide');
  }
}

const nIntervId = setInterval(showNext, 1000);
