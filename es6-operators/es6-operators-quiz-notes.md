# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
They are logical operators, commonly used in conditional expressions. They can be used outside of if statements to perform conditional checks and assign default values
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
It means that the evaluation process may end early based on the result of the expression so far. First falsy value for &&, first truthy value for ||
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
It is used to provide a default value when a variable is null or undefined. || checks for falsy values
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
A shorthand way of writing an if-else statement. It differs in that it returns a value based on the condition
- What is the `?.` (optional chaining) operator? When would you use it?
It is used to safely access properties and methods of an object without causing an error. Useful for working with nested objects
- What is `...` (spread) syntax? How do you use it with arrays and objects?
It is used to unpack elements of iterable objects such as arrays, sets, and maps into a list. It is used with arrays to create a new array by spreading the elements of an existing array; create a new object by spreading the properties of an existing object
- What data types can be spread into an array? Into an object?
Into an array: arrays, strings; Into an object: objects
- How does spread syntax differ from rest syntax?
Spread syntax is used to unpack elements from an iterable into individual elements. Rest syntax is used to gather multiple elements into an array.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```js
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
