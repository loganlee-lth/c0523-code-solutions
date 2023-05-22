console.log('hello, world');

let h1 = document.querySelector('h1');
console.log('h1:', h1);
console.dir(h1);

let explanation = document.querySelector('#explanation');
console.log('$explanation', explanation);
console.dir(explanation);

let hint = document.querySelector('.hint');
console.log('$hint', hint);
console.dir(hint);

let parent = document.querySelectorAll('p');
console.log('$paragraphs:', parent);

let exampleLink = document.querySelectorAll('.example-link');
console.log('$links:', exampleLink);
