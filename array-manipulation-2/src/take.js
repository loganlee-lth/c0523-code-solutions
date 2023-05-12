/* exported take */

function take(array, count) {
  const takeArr = [];

  if (count <= array.length) {
    for (let i = 0; i < count; i++) {
      takeArr.push(array[i]);
    }
  }

  return takeArr;
}
