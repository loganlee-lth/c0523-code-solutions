/* exported isVowel */

function isVowel(char) {

  lowerChar = char.toLowerCase();
  switch (lowerChar) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}
