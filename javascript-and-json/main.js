const books = [
  {
    isbn: '9780061122415',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  {
    isbn: '0812988523',
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
  },
  {
    isbn: '9781451673319',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
  },
];

console.log('books:', books);
console.log('typeof books:', typeof books);

const booksJSON = JSON.stringify(books);
console.log('booksJSON:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

const student = '{"id": "123456", "name": "Logan"}';
console.log('student:', student);
console.log('typeof student:', typeof student);

const studentJSON = JSON.parse(student);
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);
