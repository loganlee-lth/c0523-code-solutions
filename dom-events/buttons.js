// Click Event
function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.dir(event.target);
}

const $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

// Mouseover Event
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.dir(event.target);
}

const $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

// Double-click Event
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.dir(event.target);
}

const $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
