# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
List of classes of an element as a string value
- How do you update the CSS class attribute of an element using JavaScript?
element.className += ' anotherClass';
- What is the `textContent` property of element objects?
The text content of an element
- How do you update the text within an element using JavaScript?
element.textContent = 'Text content';
- Is the `event` parameter of an event listener callback always useful?
Not always useful if you are only concerned with the type of event occurred
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
More complicated because updating the CSS and textContent requires certain conditions being met (ex number of clicks)
- Why is storing information about a program in variables better than only storing it in the DOM?
Easier to maintain code and reference back to the value. It is easier to manipulate HTML with variables, instead of having to update the DOM each time

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
