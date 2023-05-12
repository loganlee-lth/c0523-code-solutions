/* exported omit */

function omit(source, keys) {
  const omitObj = {};

  for (const property in source) {
    if (!keys.includes(property)) {
      omitObj[property] = source[property];
    }
  }

  return omitObj;
}
