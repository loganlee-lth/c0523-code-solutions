# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
The async and await keywords are used in JavaScript to handle asynchronous operations and make asynchronous code look more like synchronous code.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
Mainly the syntax and the flow of execution
- When do you use `async`?
You use async when you want to define a function that performs asynchronous operations
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
You use await when you want to pause the execution of an async function until a Promise is resolved or rejected. When the function is synchronous
- How do you handle errors with `await`?
Wrap the await expression in a try/catch block
- What do `try`, `catch` and `throw` do? When do you use them?
try, catch, and throw are JavaScript keywords used for error handling. try is used to define a block of code where an error might occur. If an error occurs within the try block, it is caught and handled by the corresponding catch block. The throw keyword is used to explicitly throw an error
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
Promise will not be resolved or rejected before the function continues executing
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
async/await due to readability

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
