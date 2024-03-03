# 004 component and state

# Component

- Function that wrap a block of code that contain data and return html (or JSX).
- Reusable usage, you can import it anywhere without limit.
- Actually it's just a JavaScript function. 
- function name: start the name of the function using Uppercase.
- function return: react element.

```jsx
function Button() {
    return <h1>Content</h1>
}
```

# State

- Private component data (isolated).
- it's just like local variable in vanila javascript function.
- can be override into descendant of the component, or function below function.

**Basic Structure of State**
```js
// declaration
const stateName = React.useState(initialValue)

// state structure - console the state variable
(2) [1, ƒ]
    0: 1
    1: f()
       length: 1
       name: "bound dispatchSetState"
       arguments: (...)
       caller: (...)
```

## Variable in Javascript

```js
const state = 1

function add(localState){
    localState += 1
    return localState 
}

function substract(localState){
    localState -= 1
    return localState
}
```

## State in React

To make the component data managable, you have to create the data to become state
this will ensure the consistency of the data and component data encapsulation.

```jsx
function App() {
    const state = React.useState(0);
}
```

Because structure of a state is `[actualValue, dispatcherFunction()]`, you can 
grasp the value by destructuring the array. 

```jsx
const [count, updateCount] = state
```

Manipulating the `state` can be done using the provided function.

```jsx
function App() {
    const [count, setCount] = React.state(0);

    return (
        <button onClick={function() {
            setCount(count + 1)
        }}>
        </button>
    )
}
```