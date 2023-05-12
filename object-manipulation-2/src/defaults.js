/* exported defaults */

function defaults(target, source) {
  const propArr = [];

  for (const property in source) {
    propArr.push(property);
  }

  for (const propElement of propArr) {
    if (!Object.hasOwn(target, propElement)) {
      target[propElement] = source[propElement];
    }
  }
}
