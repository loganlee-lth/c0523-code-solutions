const $taskList = document.querySelector('.task-list');

function clickButton(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    const $taskListItem = event.target.closest('.task-list-item');
    console.log('closest:', $taskListItem);
    $taskListItem.remove();
  }
}

$taskList.addEventListener('click', clickButton);
