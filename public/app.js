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

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);