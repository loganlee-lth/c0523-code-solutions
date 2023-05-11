/* exported filterOutStrings */

function filterOutStrings(values) {
  const numberArr = [];

  for (let i = 0; i < values.length; i++) {
    if (typeof (values[i]) != 'string') {
      numberArr.push(values[i]);
    }
  }

  return numberArr;
}
