/* exported pick */

function pick(source, keys) {
  const pickedObj = {};

  for (const key of keys) {
    if (Object.hasOwn(source, key) && source[key] !== undefined) {
      pickedObj[key] = source[key];
    }
  }

  return pickedObj;
}
