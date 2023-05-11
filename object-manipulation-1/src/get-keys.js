/* exported getKeys */

function getKeys(object) {
  const keysArr = [];
  for (const property in object) {
    keysArr.push(property);
  }
  return keysArr;
}
