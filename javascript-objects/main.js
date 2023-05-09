// student
const student = {
  firstName: 'Logan',
  lastName: 'Lee',
  age: 30
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Executive Search Consultant';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

// vehicle
const vehicle = {
  make: 'Rolls-Royce',
  model: 'Phantom III',
  year: 1939
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of vehicle.color:', vehicle['color']);
console.log('value of vehicle.isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

// pet
const pet = {
  name: 'Daisy',
  type: 'Poodle'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
