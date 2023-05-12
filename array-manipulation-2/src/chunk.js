/* exported chunk */

// using Array.prototype.slice
// function chunk(array, size) {
//   const chunked = [];
//   for (let i = 0; i < array.length; i += size) {
//      chunked.push(array.slice(i, i + size))
//   }
//   return chunked;
// }

// Not using Array.prototype.slice
function chunk(array, size) {
  const chunkArr = [];
  let chunked = [];
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    chunked.push(array[i]);
    count++;

    if (count === size) {
      chunkArr.push(chunked);
      chunked = [];
      count = 0;
    } else if (array.length - i < size) {
      chunkArr.push(chunked);
    }
  }

  return chunkArr;
}
