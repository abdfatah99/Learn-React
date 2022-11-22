const root = document.querySelector("#root");
/**
 * create react form like normal form
 */
// function App(){
//   function ketikadisubmit(event){
//      # stop form submission
//     event.preventDefault()
//      # check if the function is run
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
 * How to get data from the form-input element into the console
 * This way below is called UNCONTROL way, because we use js vanila to
 * manipulate (get) the data
 */

function App() {
  const namaRef = React.useRef(null);

  function onSubmitFunc(event) {
    event.preventDefault();
    console.log('the button is clicked');
    console.log("namaRef:", namaRef);
    const nama = namaRef.current.value;
    console.log("nama:", nama);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmitFunc
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    ref: namaRef
  })), /*#__PURE__*/React.createElement("button", null, "Submit"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);