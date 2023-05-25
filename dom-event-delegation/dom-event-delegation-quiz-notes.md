# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
Element in which the event originated from
- Why is it possible to listen for events on one element that actually happen its descendent elements?
Possible because of event bubbling and event capturing (event propagation); event on inner element bubbles up through its parent elements
- What DOM element property tells you what type of element it is?
tagName
- What does the `element.closest()` method take as its argument and what does it return?
CSS selector
- How can you remove an element from the DOM?
element.remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
Use event delegation; add an event listener to a parent element and handle child elements

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
