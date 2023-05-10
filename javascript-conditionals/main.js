/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

// 1
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log('isUnderFive(4):', isUnderFive(4));
console.log('isUnderFive(10):', isUnderFive(10));
console.log('isUnderFive(5):', isUnderFive(5));

// 2
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('isEven(4):', isEven(4));
console.log('isEven(10):', isEven(10));
console.log('isEven(5):', isEven(5));

// 3
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log('startsWithJ(\'JavaScript\')', startsWithJ('JavaScript'));
console.log('startsWithJ(\'PHP\')', startsWithJ('PHP'));
console.log('startsWithJ(\'HTML\')', startsWithJ('HTMl'));

// 4
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};

console.log('isOldEnoughToDrink(bart):', isOldEnoughToDrink(bart))

// 5
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};

console.log('isOldEnoughToDrive(homer):', isOldEnoughToDrink(homer));

// 6
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

console.log('isOldEnoughToDrinkAndDrive(homer):', isOldEnoughToDrinkAndDrive(homer));

// 7
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else {
    return 'invalid pH level';
  }
}

console.log('categorizeAcidity(-1):', categorizeAcidity(-1));
console.log('categorizeAcidity(14.0001):', categorizeAcidity(14.0001));
console.log('categorizeAcidity(7):', categorizeAcidity(7));
console.log('categorizeAcidity(2):', categorizeAcidity(2));
console.log('categorizeAcidity(9):', categorizeAcidity(9));

// 8
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return 'We\'re the warner brothers!';
      break;
    case 'dot':
      return 'I\'m cute~';
      break;
    default:
      return 'Goodnight everybody!';
  }
}

console.log('introduceWarnerBro(\'yakko\'):', introduceWarnerBro('yakko'));
console.log('introduceWarnerBro(\'wakko\'):', introduceWarnerBro('wakko'));
console.log('introduceWarnerBro(\'dot\'):', introduceWarnerBro('dot'));
console.log('introduceWarnerBro(\'cody\'):', introduceWarnerBro('cody'));

// 9
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'John Wick';
      break;
    case 'comedy':
      return 'The 40-Year-Old Virgin';
      break;
    case 'horror':
      return 'Se7en';
      break;
    case 'drama':
      return 'Leon: The Professional';
      break;
    case 'musical':
      return 'The Sound of Music';
      break;
    case 'sci-fi':
      return 'Interstellar';
      break;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

console.log('recommendMovie(\'action\'):', recommendMovie('action'))
console.log('recommendMovie(\'comedy\'):', recommendMovie('comedy'))
console.log('recommendMovie(\'random\'):', recommendMovie('random'))
