# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
Hooks are functions that allow you to use state and other React features in functional components
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
Hooks can only be called at the top level of the components. You can’t call Hooks inside conditions, loops, or other nested functions
- What is the purpose of state in React?
To manage and store data that can change over time and affect the rendering of components
- Why can't we just maintain state in a local variable?
Local variables don't trigger component re-renders when their values change
- What two actions happen when you call a `state setter` function?
Queue and update
- When does the local `state variable` get updated with the new value?
During the next re-render

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
