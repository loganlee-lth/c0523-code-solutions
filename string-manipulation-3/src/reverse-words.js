/* exported reverseWords */

function reverseWords(string) {
  const splitArr = string.split(' ');

  for (let i = 0; i < splitArr.length; i++) {
    splitArr[i] = splitArr[i].split('').reverse().join('');
  }

  return splitArr.join(' ');
}
