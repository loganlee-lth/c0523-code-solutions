# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create, Read, Update, Delete
- How do you add a row to a SQL table?
  insert into keywords, table name, list of columns being inserted wrapped in (); values keyword, values being inserted wrapped in ()
- How do you add multiple rows to a SQL table at once?
  Same as above, but specifying more than one tuple of values separated by commas
- How do you update rows in a database table?
  update keyword, set keyword, where keyword
- How do you delete rows from a database table?
  delete keyword, table name, usually with a where clause
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  To prevent updating or deleting every row in the table
- How do you accidentally delete or update all rows in a table?
  Missing where clause
- How do you get back the modified row without a separate `select` statement?
  returning keyword

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
