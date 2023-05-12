/* exported unique */

function unique(array) {
  const uniqueArr = [];

  for (const element of array) {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  }

  return uniqueArr;
}
