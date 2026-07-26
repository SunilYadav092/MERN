# HTML (HyperText Markup Language) — Concept Notes

## 1. What is HTML?
HTML (HyperText Markup Language) is the standard **markup language** used to create the structure and content of web pages. It is not a programming language — it does not contain logic like loops or conditions. Instead, it describes *what* content is (a heading, a paragraph, a list, an image, a link) using a system of **tags** and **elements**.

Every website you visit, no matter how it's built (React, Angular, plain PHP, etc.), ultimately renders down to HTML in the browser.

## 2. Core Building Blocks

### Elements and Tags
An HTML element usually consists of an opening tag, content, and a closing tag:
```html
<p>This is a paragraph.</p>
```
- `<p>` — opening tag
- `This is a paragraph.` — content
- `</p>` — closing tag

Some elements are "void" (self-closing) and have no content, e.g. `<img>`, `<br>`, `<input>`.

### Attributes
Attributes provide extra information about an element and are written inside the opening tag:
```html
<a href="https://example.com" target="_blank">Visit Site</a>
```
Common attributes: `id`, `class`, `src`, `href`, `alt`, `style`, `title`.

## 3. Document Structure
Every HTML document follows a basic skeleton:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```
- `<!DOCTYPE html>` — tells the browser this is an HTML5 document.
- `<html>` — root element.
- `<head>` — metadata, title, links to CSS/JS (not visible on page).
- `<body>` — the actual visible content of the page.

## 4. Semantic HTML
Semantic elements clearly describe their meaning to both the browser and developers, improving accessibility and SEO:
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`

Compare this to non-semantic elements like `<div>` and `<span>`, which carry no inherent meaning and are used purely for grouping/styling purposes.

## 5. Common Element Categories
| Category      | Examples                                   |
|----------------|---------------------------------------------|
| Text           | `<h1>`–`<h6>`, `<p>`, `<span>`, `<strong>`, `<em>` |
| Lists          | `<ul>`, `<ol>`, `<li>`, `<dl>`               |
| Links & Media  | `<a>`, `<img>`, `<video>`, `<audio>`         |
| Tables         | `<table>`, `<tr>`, `<td>`, `<th>`            |
| Forms          | `<form>`, `<input>`, `<textarea>`, `<button>`, `<select>` |
| Containers     | `<div>`, `<section>`, `<article>`            |

## 6. Forms — Collecting User Input
```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Submit</button>
</form>
```
Forms are the primary way HTML captures user input to send to a server — critical in full-stack development (this data typically flows to an Express/Node backend and then to MongoDB in the MEARN stack).

## 7. The DOM (Document Object Model)
When a browser loads HTML, it converts it into a tree-like structure in memory called the **DOM**. JavaScript (and frameworks like React in the MEARN stack) interacts with this DOM to dynamically update content without reloading the page.

## 8. Why HTML Matters in the MEARN Stack
- HTML is the final output that React components render into the browser.
- Understanding raw HTML helps you understand what JSX actually compiles down to.
- Accessibility, SEO, and semantic structure all start at the HTML layer, even in a React-driven app.

## 9. Key Takeaways
- HTML = structure and content, not styling or behavior.
- Elements are made of tags + attributes.
- Semantic tags improve accessibility, SEO, and code readability.
- The browser turns HTML into the DOM, which JS/React manipulates.
