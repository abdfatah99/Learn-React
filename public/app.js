const root = document.querySelector("#root");
/**
 * DOM MANIPULATION
 *
 * To manipulate DOM in react, we need to execute the code when the component
 * is rendered, because we don't know if the document is rendered or not. 
 * like before we did, we get null when accessing DOM before render the 
 * element happend.
 * 
 * To manipulate dom, we use useEffect. The code of DOM manipulation is inside
 * useEffect
 * 
 *=> React.useEffect(functoin() {}, [])
 * 
 * we add an empty array in the second parameter because we want to execute the
 * manipulation only at the first time
 * 
 *=> function App(){
 *=>
 *=>    React.useEffect(function() {
 *=>        const title = document.getElementById("title")
 *=>        
 *=>        // check if we get the element or not
 *=>        // console.log(title)
 *=>
 *=>        // try to change the text inside the element
 *=>        title.textContent = "Aplikasi"
 *=>
 *=>        // to make it clear, let's test to change in certain time
 *=>        setTimeout(function(){
 *=>            title.textContent = "Trial an application"
 *=>        }, 2000)
 *=>    }, [])
 *=>
 *=>    return (
 *=>        <>
 *=>            <h1 id="title">Application</h1>
 *=>
 *=>        </>
 *=>    )
 */

/**
 * Using useRef
 * 
 * React create an alternative ways to manipulate the DOM
 * : using useRef -> reference 
 */

function App() {
  // 04 - we setup null because we don't make it default content value
  const changeTextReference = React.useRef(null);
  React.useEffect(function () {
    // 02 - try to access an element using normal access by id
    console.log("get element by id: ", document.getElementById("title")); // 05 - check what is `changeTextReference` is

    console.log("useRef: ", changeTextReference, typeof changeTextReference); // you can see that the changeTextReference is an object that contain
    // the element that referenced, which in the current-key
    // to manipulate the element, you have to use the key from the object
    // 06 - to simulate the changeable of the element, we can use timeout

    setTimeout(function () {
      console.log("This text appear after 3 second"); // 07 - try to manipulate the element using ref
      //      to manipulate the element, don't forget to acces via key 
      //      of the useRef object

      changeTextReference.current.textContent = "Text already Change";
    }, 3000);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "title"
  }, "Application"), /*#__PURE__*/React.createElement("p", {
    ref: changeTextReference
  }, "This text in 3 second will change"));
}
=======
 * BASIC COMPONENT lifeCycle
 * Component lifecycle: allow us to execute a function and the execution 
 *                      of the function is while the component is rendered
 * 
 * accessing an element using normal js
 * if you access the element (h1#title) before you render the component,
 * it will cause nothing

 *=> console.log(document.getElementById('title')) // this will result null
 *=> 
 *=> function App(){
 *=>     return <h1 id="title">This is title</h1>
 *=> }
 *=> 
 *=> ReactDOM.render(<App />, root)

 * but if you access it after you render it

 *=> function App(){
 *=>     return <h1 id="title">This is title</h1>
 *=> }
 *=> 
 *=> ReactDOM.render(<App />, root)
 *=>
 *=> console.log("access after render")
 *=> console.log(document.getElementById("title")) // you can see the element.

 * this way is not the best way to access an element inside react component
 * why?
 * 
 * for example we have a delay during rendering time (because one or another
 * problem)
 * 
 * simulation
 * 
 *=> setTimeout(function() {
 *=>  ReactDOM.render(<App ./>, root);
 *=> }, 1000) -> this function would be excute after 1 second
 *=> 
 * 
 * then you access the element
 * 
 *=> console.log(document.getElementById("title"))
 * 
 * this will cause a null, because the Render function is executed after 1
 * second, but you access the element immediately
 * 
 * so what is the best way to access the element?
 * - The Answer is using React.useEffect
 */

/**
 * REACT USE EFFECT
 * 
 * code: React.useEffect()
 * - useEffect function will executed while the component is rendered.
 * 
 *=> function App() {
 *=>   React.useEffect(function () {
 *=>       console.log("rendered")
 *=>       console.log(document.getElementById("title"))
 *=>    })
 *=>    
 *=>    return <h1 id="title">Hello this is title</h1>
 *=> }
 *
 * even we delay set the rendered function, we can still access the element
 * 
 *=> setTimeout(function (){
 *=>    ReactDOM.render(<App />, root)
 *=> }, 1000)
 */

/**
 * RE-EXECUTE useEffect WHILE a state is change
 * 
 * the thing that you have to keep in mind is when you re-render (for example
 * there's a change in the state) the component, this function will also 
 * re-execute.
 * 
 * for example you have a button that change a state
 * 
 * then you can check in the console that the function (useEffect) is
 * re-excuted
 *

 *=> function App() {
 *=>   const [clicked, setClicked] = React.useState(false)
 *=>   console.log(clicked)

 *=>   React.useEffect(function() {
 *=>       console.log(document.getElementById("title"))
 *=>   })
 *=>   
 *=>   return (
 *=>       <>
 *=>           <h1 id="title">Hello this is Title</h1>
 *=>           <button
 *=>               onClick={function() {
 *=>                   setClicked(true)
 *=>               }}
 *=>           >Click Me!</button>
 *=>       </>
 *=>   )
 *=> }
 *
 * keep in mind that React.useEffect is watch all state, the case above is just
 * one state (clicked).
 */

/**
 * SECOND ARGUMENT OF USE EFFECT
 * 
 * the second argument of useEffect is used to watch certain state.
 * so the useEffect only executed while the defined state is change
 * 
 *

 *=> function App() {
 *=>   const [count, setCount] = React.useState(0)
 *=>   const [clicked, setclicked] = React.useState(false)

 *=>   // if you don't add the second argument of the useEffect. 
 *=>   // useEffect would executed if all state is change.
 *=>   // in this example we just want to watch clicked state.
 *=>   // if you change count state, it wouldn't do anything.

 * note: component would be re-rendered if a state is change

 *=>   React.useEffect(function() {
 *=>       console.log("execute useEffect, also if you click Click me button");
 *=>       console.log(document.getElementById("title"))
 *=>   }, [clicked]) // you can also add another state to watch
 *=>                 // [state1, state2, ..., stateN]

 *=>   return (
 *=>       <>
 *=>       <h1 id="title">This is title</h1>
 *=>       <button
 *=>           onClick={function() {
 *=>               setclicked(true)
 *=>           }}
 *=>       >Click Me</button>
 *=>       <button
 *=>           onClick={function() {
 *=>               setCount(count + 1)
 *=>           }}
 *=>       >Tambah</button>
 *=>       <span>Nilai sekarang: {count} </span>
 *=>       </>
 *=>   )
 *=>   
 *=> }
 *
 * 
 * if you just add an empty array at the second argument, it just unwatch all
 * state that change, just execute the useEffect at the first time
 * 
 *=>    React.useEffect(function() {}, [])
 * 
 * this mechanisme is really handy if you do a data fetching
 */

/**
 * INFO
 * - using useEffect could be your indicator to the component if the componet
 *   is already rendered or not.
 * - using useEffect also can be use to fetch data
 * - using useEffect also can be use to initialize a module or library
 *   
 *   if we already know that the component is already rendered, we can track
 *   our code of using the library. 
 *   we need initialization once at the beginning, it's handy using an empty
 *   array at the second argument.
 * 
 * PROBLEM WITH INITIALIZE A LIBRARY
 *
 * if you already initialize a library at the first time, the library
 * is saved in the memory. But, when you change or move to another component 
 * (another page) then you go back to this component, the instance from this
 * library (library that the first time you initialize) would still in the 
 * memory. THE LIBRARY IS STILL ALIVE AND NOT DELETED.
 * 
 * HOW TO SOLVE THE PROBLEM? (clean up or destroy)
 * some library has thier own method to clean up or destroy thier instance, 
 * to execute destroying the instance, we can call that function or method
 * while the component is un-mount. 
 * 
 * mount    : component rendered (at the first time) into DOM tree
 * un-mount : component deleted from the DOM tree
 * 
 * to do this, just call in the return expression
 * 
 * example
 * 
 *=> React.useEffect(function() {
 *=>    console.log('init carousel')
 *=>    
 *=>    return function () { // this function will executed while the component
 *=>                         // is deleted from DOM tree (un-mount)
 *=>                         // or while the component is re-render (state change)
 *=>          console.log('destroy carousel')
 *=>    }
 *=> }, [])
 *
 * when you go back to this component, the library will start to re-initialize
 * like at the first time.
 * 
 */

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);