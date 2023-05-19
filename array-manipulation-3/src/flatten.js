/* exported flatten */

function flatten(array) {
  const flatArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flatArr.push(array[i][j]);
      }
    } else {
      console.log(array[i]);
      flatArr.push(array[i]);
    }
  }

  return flatArr;
}
