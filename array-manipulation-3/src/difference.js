/* exported difference */

function difference(first, second) {
  const diffArr = [];

  for (const element of first) {
    if (!second.includes(element)) {
      diffArr.push(element);
    }
  }
  for (const element of second) {
    if (!first.includes(element)) {
      diffArr.push(element);
    }
  }

  return diffArr;
}
