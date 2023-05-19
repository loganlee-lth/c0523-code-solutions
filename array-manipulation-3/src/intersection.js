/* exported intersection */

function intersection(first, second) {
  const interArr = [];

  for (const element of first) {
    if (second.includes(element)) {
      interArr.push(element);
    }
  }

  return interArr;
}
