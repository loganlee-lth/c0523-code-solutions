# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
Package manager for JavaScript. It allows developers to easily install, update, and remove packages from their projects
- What is a package?
A package is a reusable unit of code that is distributed and published on NPM
- What are some other popular package managers?
Yarn, PNPM
- How can you create a `package.json` with `npm`?
npm init
- What is a dependency and how do you add one to a package?
Dependency is an object that contains the library, which your project requires for production environments and functioning effectively; npm install package-name
- What happens when you add a dependency to a package with `npm`?
It will download the specified package and its dependencies from the NPM registry and save them in a node_modules directory in your project.
- What is a devDependency and how do you add one to a package?
It is a package that is only needed for local development and testing; npm install package-name --save-dev
- How do you define and run `npm` scripts? Why are these useful?
To define, set its name and write the script under the 'scripts' property of your package.json file. To run the script, use npm run script-name.
NPM scripts are useful for automating repetitive tasks, such as running tests, building assets, starting servers, and more

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
