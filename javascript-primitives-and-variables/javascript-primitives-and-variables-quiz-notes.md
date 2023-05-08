# javascript-primitives-and-variables-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of variables?
The purpose of variables is to store data, which may or may not be changed later on (let, const)
- How do you **declare** a variable?
Variables can be declared by using the var, let, or const keywords
- How do you initialize (**assign a value to**) a variable?
Variables can be initialized by using the assignment operator = (equal sign)
- What characters are allowed in variable names?
Letters, digits, or the symbols $ and _
- What does it mean to say that variable names are "case sensitive"?
For example, temp and TEMP are two different variables
- What is the purpose of a string?
To store one or more characters that may consist of letters, numbers, or symbols using double quotes, single quotes, backticks (empty string is considered a string)
- What is the purpose of a number?
To represent both integer and floating point numbers; to perform mathematical operations
- What is the purpose of a boolean?
To store yes/no values (true, false)
- What does the `=` operator mean in JavaScript?
It is the assignment operator which assigns the value of its right operand to its left operand
- How do you update the value of a variable?
By using the assignment operator, without var, let, or const keywords. A repeated declaration of the same variable is an error
- What is the difference between `null` and `undefined`?
A null value represents the intentional absense of any object value (nothing, empty, value unknown). Undefined indicates that a variable has not been assigned a value. If a variable is declared, but not assigned, then its value is undefined
- Why is it a good habit to include "labels" when you log values to the browser console?
Labels help the reader understand which variables are being logged to the console.
- Give five examples of JavaScript primitives.
String, number, boolean, undefined, null

## Notes

All student notes should be written here.

There are 8 basic data types in JavaScript. (string, number, bigint, boolean, undefined, symbol, null)
object is a non-primitive data type
JavaScript is dynamically typed, meaning variables are not bound to data types
Special numeric values (Infinity, -Infinity, NaN)
Use null to assign an empty or unknown value to a variable; undefined is reserved as a default initial value for unassigned things
let message; <-- declaration
message = 'Hello'; <-- assignment
Constants named using capital letters and underscores for difficult-to-remember values (hard-coded values)

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
