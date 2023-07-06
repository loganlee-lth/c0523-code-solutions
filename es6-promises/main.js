import takeAChance from './take-a-chance.js';

const promise = takeAChance('Logan');
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });
