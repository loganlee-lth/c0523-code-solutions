/* exported dropRight */

function dropRight(array, count) {
  const dropArr = [];

  for (let i = 0; i < array.length - count; i++) {
    dropArr.push(array[i]);
  }

  return dropArr;
}
