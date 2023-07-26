import LinkedList from './lib/linked-list';

export function getLength(list) {
  let count = 1;
  while (list.next) {
    list = list.next;
    count++;
  }
  return count;
}

export function append(list, value) {
  while (list.next) {
    list = list.next;
  }
  const newNode = new LinkedList(value);
  list.next = newNode;
}

export function getTail(list) {
  while (list.next) {
    list = list.next;
  }
  return list.data;
}

export function includes(list, value) {
  while (list) {
    if (list.data === value) {
      return true;
    }
    list = list.next;
  }
  return false;
}
