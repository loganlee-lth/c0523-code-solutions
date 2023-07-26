export function countValues(stack) {
  let count = 0;
  while (stack.peek() !== undefined) {
    count++;
    stack.pop();
  }
  return count;
}

export function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const current = stack.pop();
    if (current > max) {
      max = current;
    }
  }
  return max;
}
