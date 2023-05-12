/* exported invert */

function invert(source) {
  const invObj = {};

  for (const property in source) {
    invObj[source[property]] = property;
  }

  return invObj;
}
