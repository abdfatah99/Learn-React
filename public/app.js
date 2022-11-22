const root = document.querySelector("#root");
/**
 * (def)
 * React state
 * state - data inside react component
 *       - isolated, can't accessed from another component
 *       - changeable, when you change the data, it (the component) will be
 *         re-rendered 
 * 
 * then you have to create ReactComponent
 * (def)
 * React component: - function, start with Uppercase
 *                  - return, react element
 *     
 * (step - init) -> function 01
 * 1. create React component
 *     -> function App(){
 *     ->   return <h1>React element</h1>;    
 *     -> }    
 * 
 * what we want to do is create counter app, not calculator 
 * add number when you click + plus button
 * substract number when you click - minus button
 * 
 * (step - 01)
 * 1. create simple app represent value using react state
 *     -> function App() {
 *     ->     const state = React.useState(1);
 *     ->     console.log(state)    
 *     ->     
 *     ->     return <h1>React Element</h1>
 *     -> }
 * 
 * what does React.useState(1) mean?
 * 
 * normally when you want to create this app using normal js,
 * you just create a variable then assign a value to calculate
 * the value using function (literal method) like:
 *    -> const state = 1
 *    -> 
 *    -> function add(state) {
 *    ->     state += 1
 *    ->     return state; 
 *    -> }
 *    -> 
 *    -> function substract(state) {...}
 * 
 * you will not do this with React, instead you'll assign the value
 * using React State.
 * 
 * when you console the state variable, this what you'll get:
 * (2) [1, ƒ]
 *     0: 1
 *     1: f()
 *         length: 1
 *         name: "bound dispatchSetState"
 *         arguments: (...)
 *         caller: (...)
 * 
 * you can see that we have two value:
 * first is the value (state) at the time
 * second is function, that you can use to update the data (state)
 * 
 * to change the state value, just call the function, then assign the
 * value
 * 
 * (step - 02)
 * 
 */
// function 01
// function App() {
//     return <h1>React element</h1>
// }
// step 01
// function App() {
//     const state = React.useState(1)
//     console.log(state)
//     return <h1>React Element</h1>
// }
// step 02

function App() {
  const state = React.useState(1); // get the value of the state at the time 

  const count = state[0]; // update the value using dispatch function
  // remember that state[1] is function from React useState

  const updateCount = state[1]; // if you check the updateCount, it is the same as normal state

  console.log(updateCount);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      updateCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      updateCount(count + 1);
    }
  }, "+"));
}
/**
 * there's another way to write to get more readable, using structuring
 * (extracting the useState array)
 * 
 * const [count, updateCount] = React.useState(0);
 * 
 * but, the code above is not general naming. The best practise code is
 * const [count, setCount] = React.useState(0); 
 */
// because you are using jsx, you can directly bind the component
// ? what does this mean


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);