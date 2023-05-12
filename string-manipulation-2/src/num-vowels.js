/* exported numVowels */

function numVowels(string) {
  const lowerString = string.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < lowerString.length; i++) {
    if (vowels.includes(lowerString[i])) {
      count++;
    }
  }

  return count;
}
