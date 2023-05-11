/* exported oddOrEven */

function oddOrEven(numbers) {
  const checkArr = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      checkArr.push('even');
    } else {
      checkArr.push('odd');
    }
  }

  return checkArr;
}
