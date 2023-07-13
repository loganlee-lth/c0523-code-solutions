# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  When defining the function
- What allows JavaScript functions to "remember" variables from their surroundings?
  When a function is defined inside another function, it has access to the outer function's variables. The inner function 'remembers' these variables even after the outer function has finished executing
- What values does a closure contain?
  Its own scope, variables from the outer function(s), and variables from the global scope
- When is a closure created?
  Every time a function is created, at function creation time
- How can you tell if a function will be created with a closure?
  Any function that is nested within another function and accesses variables from its outer function will have a closure
- In React, what is one important case where you need to know if a closure was created?
  If you create closures inside useEffect, it is important to know because it may cause bugs and it will help you know when the Effect should actually be ran.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
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
  width: 100%;
}
```
