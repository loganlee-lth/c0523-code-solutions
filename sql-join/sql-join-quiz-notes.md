# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A foreign key is a set of attributes in a table that refers to the primary key of another table. The foreign key links these two tables
- How do you join two SQL tables? (Provide at least two syntaxes.)
  JOIN ... USING when the primary key and the foreign key have exactly the same name. JOIN ... ON ("products"."supplierId" = "suppliers"."supplierId") if that is not the case
- How do you temporarily rename columns or tables in a SQL statement?
  AS keyword
- How do you create a one-to-many relationship between two tables?
  A foreign key in one table pointing to a primary key in another table (product and supplier example)
- How do you create a many-to-many relationship between two tables?
  Introducing a 3rd join table that contains a foreign key to one of the tables and another foreign key to the other table

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
