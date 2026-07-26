# CSS (Cascading Style Sheets) — Concept Notes

## 1. What is CSS?
CSS (Cascading Style Sheets) is the language used to control the **presentation and layout** of HTML content — colors, fonts, spacing, positioning, responsiveness, and animations. If HTML is the skeleton of a webpage, CSS is the skin, clothing, and styling.

## 2. Ways to Apply CSS
1. **Inline** — written directly on an element (highest specificity, hardest to maintain):
   ```html
   <p style="color: red;">Text</p>
   ```
2. **Internal** — inside a `<style>` tag in the `<head>`:
   ```html
   <style>
     p { color: red; }
   </style>
   ```
3. **External** (recommended) — a separate `.css` file linked via `<link>`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

## 3. Syntax Basics
```css
selector {
  property: value;
}
```
Example:
```css
h1 {
  color: navy;
  font-size: 24px;
}
```

## 4. Selectors
| Selector Type | Example         | Targets                          |
|----------------|-----------------|-----------------------------------|
| Element        | `p`             | All `<p>` elements                |
| Class          | `.btn`          | Elements with `class="btn"`       |
| ID             | `#header`       | Element with `id="header"`        |
| Descendant     | `div p`         | `<p>` inside a `<div>`            |
| Pseudo-class   | `a:hover`       | Links when hovered                |
| Attribute      | `input[type="text"]` | Inputs with a specific attribute |

## 5. The "Cascade" — How Conflicts Are Resolved
CSS rules can conflict. The browser resolves this using:
1. **Specificity** — ID selectors > class selectors > element selectors.
2. **Source order** — later rules override earlier ones (if specificity is equal).
3. **Importance** — `!important` overrides normal rules (use sparingly).
4. **Inheritance** — some properties (like `color`, `font-family`) are inherited from parent elements by default.

## 6. The Box Model
Every HTML element is treated as a rectangular box made up of:
```
| margin
|  border
|   padding
|    content
```
- **content** — the actual text/image.
- **padding** — space between content and border.
- **border** — the edge around the padding.
- **margin** — space outside the border, separating it from other elements.

```css
.box {
  width: 200px;
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
  box-sizing: border-box; /* keeps width predictable */
}
```

## 7. Layout Systems
- **Flexbox** — one-dimensional layout (row or column), great for aligning items:
  ```css
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ```
- **Grid** — two-dimensional layout (rows and columns simultaneously):
  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  ```

## 8. Responsive Design
CSS adapts layouts to different screen sizes using **media queries**:
```css
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
```
This is essential for mobile-friendly full-stack applications.

## 9. Why CSS Matters in the MEARN Stack
- In React, CSS can be applied via plain `.css` files, CSS Modules, styled-components, or utility frameworks like Tailwind CSS.
- A solid grasp of core CSS (box model, flexbox, grid, specificity) makes it far easier to debug styling issues in any framework built on top of it.

## 10. Key Takeaways
- CSS controls presentation: layout, color, spacing, responsiveness.
- The cascade determines which rule "wins" when there's a conflict.
- The box model defines how size and spacing are calculated.
- Flexbox and Grid are the modern standards for layout.
- Media queries make designs responsive across devices.
