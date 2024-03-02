# Recap chapter 01 - React Fundamental

## 001 Difference between React and vanila JS in HTML manipulation

<details>
    <summary>Vanila JS code</summary>

```html
<div id='root'> </div>

<script>
    const root = document.querySelector('#root')
    const element = document.createElement('h1')

    element.textContent = 'Hello World from javascript'
    element.className = 'heading-1'

    root.appendChild(element)
</script>
```

Result

```html
<div id='root'>
    <h1 class='heading-1'>Hello World from javascript</h1>
</div>
```

It's really hard to maintain the code if you manage html file with vanila JS
</details>

<details>
    <summary>Working with React code</summary>

```html
<div id='root'></div>

<script>
const root = document.querySelector("#root");

    const element = React.createElement("h1", {
        children: "Hello world from react",
        className: "heading-1",
    });
ReactDOM.render(element, root);
</script>
```

Result
```html
<div id='root'>
    <h1 class='heading-1'>Hello World from javascript</h1>
</div>
```
</details>

It's easier to work with react, especially when you want to make multiple layout, you just have to create one ReactElement, then you duplicate the element. You don't need to recreate the same element.


## 002 ReactJS and ReactDOM

* ReactJS is javascript code (function) that create the element.
    * output &rarr; object literal. 
* ReactDOM is javascript library that render the Element.
    * output: rendering the object (created by reactJS) to HTML.


## 003 Fragment

in React, you can't create two or more elements with one parent element. Alternate with that, you can wrap the two elements with `div`, but it is not the best case.  
To solve the problem, react comes with `Fragment` that allows you to display or render two or more elements. Also with this approach, you can work with nested element like `li, ul`.

<details>
    <summary>Code</summary>

```html
<script>
const element = React.createElement(React.Fragment, {
    children: [firstReactElement, SecondReactElement, ...]
})

ReactDOM.render(element, root)
</script>
```

</details>


## 004 JSX

Working with normal React using normal JavaScript is really hard to maintain, because you have to create every single HTML with javascript.  
Using JSX, you can write HTML code inside JavaScript Function. 

```html
<!-- you have to add babel library first to render babel code -->
<script type='text/babel'>
    const element = (
        <div>
            <ul>
                <li>Apple</li>
                <li>Orange</li>
                <li>Grape</li>
            </ul>
        </div>
    )
    ReactDOM.render(element, root);
</script>
```


<details> 
    <summary> Using React </summary>

```html
<script type='text/babel'>
    const element = React.createElement('div', 
        { className: "list-fruits" },
        React.createElement('ul', null, 
            React.createElement('li', null, "Apple"),
            React.createElement('li', null, "Orange"),
            React.createElement('li', null, "Grape")
        )
    )
    ReactDOM.render(element, root);
    
```
</details>

## 005 Curly Brackets

You can add JavaScript expression inside React Element.  

<details>
    <summary> Code </summary>

```html
<script type='text/babel'>
    function upperFunc(name){
        return name.toUpperCase();
    }

    // React element
    const element = (
        <p> Hasil UpperName: { upperFunc(nama.value) } </p>
    )
</script>
```
</details>

## React Component

React component is JavaScript function that return HTML, with this you can abstract you UI to get reusable code.

* function name start with Uppercase: Hello, Card, People, etc...

<details>
    <summary>Code</summary>

```html
<script type='text/babel'>

    function Halo(props){
        console.log(props.name)
        return <p>Halo <b>{ props.name }</b></p>
    }

    const element = (
        <>
            <Halo name='Fatah'>
            <Halo name='Ria'>
        </>
    )
```
</details>
