const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenArr = numbers.filter((el) => el % 2 === 0);
console.log('Even numbers', evenArr);

const noDArr = names.filter((el) => !el.toLowerCase().includes('d'));
console.log('No D', noDArr);
