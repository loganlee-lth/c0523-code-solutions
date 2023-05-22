# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
For debugging purposes; to see what is happening in the code
- What is a "model"?
A hierarchical representation of a web page
- Which "document" is being referred to in the phrase Document Object Model?
HTML document representing the page content
- What is the word "object" referring to in the phrase Document Object Model?
Each and every HTML tag
- What is a DOM Tree?
A tree structure of nested nodes from the given HTML document
- Give two examples of `document` methods that retrieve a single element from the DOM.
elem.querySelector(css), document.getElementById('elem')
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
elem.querySelectorAll(css)
- Why might you want to assign the return value of a DOM query to a variable?
In order to reference the value later and perform actions on them
- What `console` method allows you to inspect the properties of a DOM element object?
console.dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them
- What does `document.querySelector()` take as its argument and what does it return?
CSS selector; first element in the document that matches the selector
- What does `document.querySelectorAll()` take as its argument and what does it return?
CSS selector; NodeList of all elements

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
