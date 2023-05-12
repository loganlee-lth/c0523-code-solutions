/* exported isPalindromic */

function isPalindromic(string) {
  const split = string.replaceAll(' ', '').split('');
  const reverseArr = split.reverse();
  const joinStr = reverseArr.join('');

  if (string.replaceAll(' ', '') === joinStr) {
    return true;
  } else {
    return false;
  }
}
