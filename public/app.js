const root = document.querySelector("#root");
/**
 * create react form like normal form
 */
// function App(){
//   function ketikadisubmit(event){
//     // stop from submission
//     event.preventDefault()
//     // check if the function is run
//     console.log("the button clicked")
//   }
//   return(
//     <form onSubmit={ketikadisubmit}>
//       <div>
//         <label>Nama: </label>
//         <input type="text" name="nama" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

/**
 * How to the data from the form-input element into the console
 */

function App() {
  function onSubmitFunc(event) {
    event.preventDefault();
    console.log('the button is clicked');
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmitFunc
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    id: "name"
  })), /*#__PURE__*/React.createElement("button", null, "Submit"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);