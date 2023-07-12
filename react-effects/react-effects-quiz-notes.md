# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When it is inserted into the DOM
- What is a React Effect?
  Side effects, such as data fetching. Lets you synchronize your components with some external system like a non-React widget, network, or the browser DOM
- When should you use an Effect and when should you not use an Effect?
  Use an effect when you need to perform side effects that depend on the state or props of a component. Do not use Effect for things that could be managed by state
- When do Effects run?
  After every render
- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  Values that the effect depends on. If one of these values changes between renders, the effect will run again; declare them in an array as the second argument
- Why would you want to clean up from an Effect?
  To clean up from an effect to prevent memory leaks, such as removing event listeners, canceling timers, or invalidating a pending request
- How do you clean up from an Effect?
  You can return a function from your effect function
- When does the cleanup function run?
  The cleanup function runs before the component is unmounted and also before re-running the effect because of a change in dependencies

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
