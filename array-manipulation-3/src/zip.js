/* exported zip */

function zip(first, second) {
  const matrix = [];
  let zipped = [];
  let shorter;

  if (first.length > second.length) {
    shorter = second.length;
  } else {
    shorter = first.length;
  }

  for (let i = 0; i < shorter; i++) {
    zipped.push(first[i]);
    zipped.push(second[i]);
    matrix.push(zipped);
    zipped = [];
  }

  return matrix;
}
