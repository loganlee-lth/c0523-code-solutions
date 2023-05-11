/* exported countdown */

function countdown(number) {

  const numArr = [];

  for (let i = 0; i <= number; i++) {
    numArr.push(number - i);
  }
  return numArr
}
