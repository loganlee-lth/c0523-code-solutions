/* exported capitalizeWords */

function capitalizeWords(string) {
  const splitArr = string.split(' ');

  for (let i = 0; i < splitArr.length; i++) {
    splitArr[i] = splitArr[i][0].toUpperCase() + splitArr[i].slice(1).toLowerCase();
  }

  return splitArr.join(' ');
}
