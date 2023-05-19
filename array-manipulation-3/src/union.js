/* exported union */

function union(first, second) {
  const unionArr = [];

  for (const element of first) {
    unionArr.push(element);
  }
  for (const element of second) {
    if (!unionArr.includes(element)) {
      unionArr.push(element);
    }
  }

  return unionArr;
}
