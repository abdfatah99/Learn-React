# Problem with Vanila JS

```JavaScript
const para = document.createElement("p");
para.innerText = "This is a paragraph.";

// append to body
document.body.appendChild(para);
```

-   a lot of work to do only just adding simple structure.
-   hard to maintain.

# `React.createElement()` Problem

If you want to create a list like this

```html
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
```

Using `React.createElement()`, you need to define/create each element using
`.createElement()` for every single tag.

```JavaScript
const itemList = React.createElement(
    "ul",
    { className: 'list'}, // tag property
    React.createElement('li', null, 'item 1'),
    React.createElement('li', null, 'item 2'),
    React.createElement('li', null, 'item 3'),
)
```

To create simple list, you need bunch of configuration, function call etc, and
it will takes a lot of time and make the program hard to develop.

# Intro to JSX

JSX stand for `JavaScript XML`, allow you to write HTML in `React JavaScript`.

-   you don't need to use `.createElement()` or `appendChild()` methods.

```JavaScript
const itemList = (
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
)

ReactDOM.render(itemList, root)
```

## JSX vs HTML

| HTML            | JSX                          |
| --------------- | ---------------------------- |
| `<ul class="">` | `<ul className="heading-1">` |

## JavaScript inside HTML

To use JavaScript inside JSX, you just need curly-bracket to wrap the JS code

```JavaScript
function ngegas(text){
    return text.toUpperCase(text)
}

const name = "fatah";
const element = <h1>Hello, {ngegas(name)}</h1>;

ReactDOM.render(element, root);
```

## Empty Element

> Element that has no content, can't have any child nodes (i.e nested element 
> or text nodes)

- `<img>`
- `<input>`
- `<link>`
- `<etc>`

More: [Empty Element](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)

To add `empty element` to JSX, you should add `sub-close tag` (`slash`).

```JavaScript
const image = <img src="..." />

```


## Important Notes

1. BABEL

To able use JSX in html, you need to add BABEL to transpile you JSX to DOM.

```html
<!-- import babel to transpile jsx to dom -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

2. Add babel type to `script` tag code.

Purpose: make babel recognize our code to transpile.

```html
<script type="text/babel">
    // your JSX code goes here ...
</script>
```

The best way to use `BABEL` is using package manager. Compile the JSX code in
local before serving it to client.

> Using babel here only for learning purpose.

# Resources

[HTML vs JSX whats the different](https://www.freecodecamp.org/news/html-vs-jsx-whats-the-difference/)  
[What are the differences between jsx and html](https://www.geeksforgeeks.org/what-are-the-differences-between-jsx-and-html/)  
[Babel Standalone](https://babeljs.io/docs/babel-standalone)  
