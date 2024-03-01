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

> The object literal is MOSTLY KNOWN as VIRTUAL DOM

```html
// structure of 'hello world' from javascript
<h1 class="heading-1"></h1>
```

### React Object Result

We can see there a lot of internal property used by the internal `React`

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

### Virtual DOM

The output object from `React.createElement` : 

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

Is commonly referred as the "**Virtual DOM**". The main idea behind *Virtual DOM*
is related to performance in the updating the actual DOM. 

> Instead of directly Manipulating the Real DOM for every *State* change, React
> creates a **lightweight, in-memory** Representation of the DOM called Virtual
> DOM.

When you create an HTML Element using `React.createElement`, the function actually
create a vanila javascript object that mimic the actual DOM that you want to 
create. For example the `type` of element `h1`, its `props` as `children` and
the style as `className`.

Example:

```Javascript
const element = React.createElement('h1', {
    children: 'hello from React!',
    className: 'heading-1',
});
```

Output element object

```JavaScript
{
  type: 'h1',
  props: {
    children: 'hello from React!',
    className: 'heading-1',
  },
  key: null, // React uses this for reconciliation
  ref: null, // Reference to the actual DOM node
  _owner: null, // Used internally by React for managing ownership
  _store: {}   // Used internally by React for managing context
}
```

The generated object represent a virtual version of the `Element <h1>` with 
specified properties. React will use this *Virtual DOM* to efficiently update 
the actual DOM when needed, **Minimizing direct Real DOM manipulation for better
performance**.