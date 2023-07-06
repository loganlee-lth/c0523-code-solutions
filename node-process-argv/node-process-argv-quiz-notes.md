# node-process-argv-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `process` object in a Node.js program?
A global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().
- How do you access the `process` object in a Node.js program?
Explicitly accessed using const process = require('process');
However, it is available globally without using require().
- What is the data type of `process.argv` in Node.js?
Array of strings
- How do you access the command line arguments in a Node.js program?
Access the process.argv array.
node echo.js arg1 arg2
process.argv[2], process.argv[3]

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
