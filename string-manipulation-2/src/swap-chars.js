/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const firstChar = string[firstIndex];
  const secondChar = string[secondIndex];

  return (string.substring(0, firstIndex) + secondChar + string.substring(firstIndex + 1, secondIndex) + firstChar + string.substring(secondIndex + 1, string.length));

}
