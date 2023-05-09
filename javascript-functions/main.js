// 1
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('result of convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

// 2
function greet(name) {
  return 'Hey, ' + name;
}
console.log('result of greet(\'Beavis\'):', greet('Beavis'));

// 3
function getArea(width, height) {
  return width * height;
}
console.log('result of getArea(17, 42):', getArea(17, 42));

// 4
function getFirstName(person) {
  return person.firstName;
}
console.log('result of getFirstName({firstName: \'Lelouche\', lastName: \'Lamperouge\'}):', getFirstName({firstName: 'Lelouche', lastName: 'Lamperouge'}));

// 5
function getLastElement(array) {
  return array[array.length - 1];
}
console.log('result of getLastElement([\'propane\', \'and\', \'propane\', \'accessories\']):', getLastElement(['propane', 'and', 'propane', 'accessories']));
