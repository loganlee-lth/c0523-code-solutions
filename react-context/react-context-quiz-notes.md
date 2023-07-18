# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  React Context provides a way to pass data through the component tree from parent to child components, without having to pass props down manually at each levelu
- What values can be stored in context?
  Any type of value
- How do you create context and make it available to the components?
  Use createContext function to create a context. Use the provider to wrap any part of the component tree that should be able to access the Context's value
- How do you access the context values?
  useContext hook
- When would you use context? (in addition to the best answer: "rarely")
  Context is primarily used when some data needs to be accessible by many components at different nesting levels

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
