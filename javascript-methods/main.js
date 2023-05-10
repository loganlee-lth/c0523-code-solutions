// Math object
const num1 = 5;
const num2 = 25;
const num3 = 500;

const maximumValue = Math.max(num1, num2, num3);
console.log('maximum value:', maximumValue);

const heroes = ['Wolverine', 'Superman', 'Doctor Strange', 'Silver Surfer'];

let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

// Array methods
const library = [{title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut'}, {title: 'The Alchemist', author: 'Paulo Coelho'}, {title: '1984', author: 'George Orwell'}];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);

let js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
let css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

// String methods
const fullName = 'Logan Lee';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
