/* exported filterOutNulls */

function filterOutNulls(values) {
  const filteredArr = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      filteredArr.push(values[i]);
    }
  }

  return filteredArr;
}
