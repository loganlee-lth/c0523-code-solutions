# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
For debugging purposes; to see what is happening in the code
- What is the purpose of events and event handling?
To respond to user inputs and events (mouse click, etc) by performing some action (changing the text, etc)
- Are all possible parameters required to use a JavaScript method or function?
No, not all are required
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListener()
- What is a callback function?
A function that is passed into another function and called later
- What object is passed into an event listener callback when the event fires?
Event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
The HTML element that was affected by the event. console.log & console.dir
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
The first snippet shows a callback function. The function is invoked inside another function. The bottom snippet shows a function being called as an argument


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
