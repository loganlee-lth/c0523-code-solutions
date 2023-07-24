export function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  const top = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(top);
    return;
  }
  const second = stack.peek();
  stack.push(top);
  while (stack.peek() !== top) {
    stack.push(stack.pop());
  }
  return second;
}

export function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const top = stack.pop();
  stack.push(value);
  stack.push(top);
}
