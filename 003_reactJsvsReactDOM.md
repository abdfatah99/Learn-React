# Install Library to run react

In the tutorial, we have to import two library

-   React
-   React DOM

```html
<script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

-   Why should we import the library?
-   What if we just add one library?

## Usage of react block maker and rendering features

To answer the questions, we have to know how we create element using react

```JavaScript
const root = document.querySelector('#root');

const element = React.createElement('h1', {
    children: 'hello from React!',
    className: 'heading-1',
})

console.log(element)
```

The `React` class provided from the first library (`React.development.js`). This
function is used to create the element of `html` using React.

In order to render (inject and render) the created element, you need the second
library that provide a class `ReactDOM` and use method `.render` to inject and
render the element.

```JavaScript
const root = document.querySelector('#root');

const element = React.createElement('h1', {
    children: 'hello from React!',
    className: 'heading-1',
})

console.log(element)

ReactDOM.render(element, root)
```

## Render result

Source

```JavaScript
const element = React.createElement('h1', {
    children: 'hello from React!',
    className: 'heading-1',
})
```

Output

```JavaScript
Object { "$$typeof": Symbol("react.element"), type: "h1", key: null, ref: null, props: {…}, _owner: null, _store: {…}, … }
​
"$$typeof": Symbol("react.element")
_owner: null
_self: null
_source: null
_store: Object { … }
key: null
props: Object { children: "Hello world from react", className: "heading-1" }
ref: null
type: "h1"
<prototype>: Object { … }
```

The output is object literal. It's very different with the element that created
using `vanilaJS -> document.createElement()`, it will produce DOM node.

```html
// structure of 'hello world from javascript
<h1 class="heading-1"></h1>
```

### React Object Result

We can wee there a lot of internal property used by the internal `React`

-   `Typeof`: type of the creator of the element.
-   `Props`: define the shape/look/term/**content**/className etc of the element.
-   `Type`: type of HTML element that we used, in the example we use h1.

## Transform from Object Literal to DOM

`React.createElement()` function resulting an object literal. In order to make
it able to display in the window, you need to render the object literal using
`ReactDOM` class using `.render(element, root)` method.

```JavaScript
ReactDOM.render(element, root);
```
