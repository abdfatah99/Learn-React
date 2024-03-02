# Styling React element

Default HTML element styling

```html
<div style="width: 200px; height: 200px; background-color: blue">
    Element Styling
</div>
```

Some restriction:

- if style property has two or more root word, you have to merge it. This because
  the default format of the file is javascript. If you are using `background-color`
  the interpreter will translate `-` as minus sign.
- Naming of style property should be camelCase
- Example: `background-color` &rarr; `backgroundColor`

```js
let elementStyle = {
    width: "200px", // you can just type 200 (number)
    height: "200px", // you can just type 200 (number)
    backgroundColor: "blue",
};

const element = <div style={elementStyle}></div>;
```
