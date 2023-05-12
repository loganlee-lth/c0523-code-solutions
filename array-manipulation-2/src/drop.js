/* exported drop */

function drop(array, count) {
  const dropArr = [];

  for (let i = count; i < array.length; i++) {
    dropArr.push(array[i]);
  }

  return dropArr;
}
