function ExampleConstructor() {};

console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype prop:', typeof ExampleConstructor.prototype);

const example = new ExampleConstructor();
console.log('value of example:', example);

const instance = example instanceof ExampleConstructor;
console.log('example instanceof ExampleConstructor:', instance);
