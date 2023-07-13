const $pokemonImages = document.querySelectorAll('.pokemon-img');
const $circles = document.querySelectorAll('.fa-circle');
const $leftArrow = document.querySelector('.fa-chevron-left');
const $rightArrow = document.querySelector('.fa-chevron-left');
const $imageRow = document.querySelector('#image-container')
const $circleRow = document.querySelector('#dot-container');

let imageIndex = 0;

function showImage(currentIndex) {
  for (let i = 0; i < $pokemonImages.length; i++) {
    if (i === currentIndex) {
      $pokemonImages[imageIndex].classList.remove('hide');
      $circles[i].classList.replace('fa-regular', 'fa-solid');
    } else {
      $pokemonImages[i].classList.add('hide');
      $circles[i].classList.replace('fa-solid', 'fa-regular');
    }
  }
}

function showPrev() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = $pokemonImages.length - 1;
  }
  showImage(imageIndex);
}

function showNext() {
  imageIndex++;
  if (imageIndex === $pokemonImages.length) {
    imageIndex = 0;
  }
  showImage(imageIndex);
}

$imageRow.addEventListener('click', event => {
  if (event.target.id === 'left') {
    showPrev();
  } else if (event.target.id === 'right') {
    showNext();
  }
  clearInterval(carousel);
  carousel = setInterval(showNext, 3000);
});

$circleRow.addEventListener('click', event => {
  for (let i = 0 ; i < $circles.length; i++) {
    if ($circles[i] === event.target) {
      imageIndex = i;
      showImage(imageIndex);
      clearInterval(carousel);
      carousel = setInterval(showNext, 3000);
    }
  }
});

let carousel = setInterval(showNext, 3000);
