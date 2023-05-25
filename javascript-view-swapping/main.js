const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

function changeTab(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }

    const $dataViewValue = event.target.getAttribute('data-view');

    for (let j = 0; j < $view.length; j++) {
      if ($view[j].getAttribute('data-view') === $dataViewValue) {
        $view[j].className = 'view';
      } else {
        $view[j].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', changeTab);
