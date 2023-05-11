/* exported compact */

function compact(array) {
  const compactArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!!(array[i]) === true) {
      compactArr.push(array[i]);
    }
  }
  return compactArr;
}
