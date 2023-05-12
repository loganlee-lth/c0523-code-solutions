/* exported takeRight */

function takeRight(array, count) {
  const rightArr = [];

  if (count > array.length) {
    return array;
  } else {
      for (let i = array.length - count; i < array.length; i++) {
        rightArr.push(array[i]);
      }
  }

  return rightArr;
}
