/* exported isAnagram */

function isAnagram(firstString, secondString) {
  const check1 = firstString.replaceAll(' ', '').split('').sort().join('');
  const check2 = secondString.replaceAll(' ', '').split('').sort().join('');

  return check1 === check2;
}
