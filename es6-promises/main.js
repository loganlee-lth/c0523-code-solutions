import takeAChance from './take-a-chance.js';

const promise = takeAChance('Logan');

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
