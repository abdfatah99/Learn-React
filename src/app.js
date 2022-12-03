const root = document.querySelector("#root");

/**

 * create react form like normal form

 * Maing list using normal HTML list element
 * it's quite simple, you just create normal HTML list the insert it into JSX
 */

// function App(){
//   function ketikadisubmit(event){
//      # stop default html behaviour
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
 * manipulate (get) the data (just reference it, actually we can use
 * getElementById if you want to use this term )
 */

// function App(){
//   const namaRef = React.useRef(null)

//   function onSubmitFunc(event){
//     event.preventDefault()
//     console.log('the button is clicked')
//     console.log("namaRef:", namaRef)
//     const nama = namaRef.current.value
//     console.log("nama:", nama)
//   }

//   return (
//     <form onSubmit={onSubmitFunc}>
//       <div>
//         <label htmlFor='name'>Nama: </label>
//         <input type="text" name='name' id='name' ref={namaRef}/>
//       </div>
//       <button>Submit</button>
//    </form>
//   )
// }

/**
 * CONTROL WAY of form
 *  - using state
 *
 * the input element is contolled by react via state
 *
 */

function App() {

  // create state to store the inputted value
  const [nama, setNama] = React.useState(""); // default value is empty string

  function submitForm(event) {
    event.preventDefault();
    console.log(event.target);

    console.log(`Submitted name: ${nama}`);
  }

  return (
    <>
    {/* 1. create the form */}
      <form onSubmit={submitForm}>
        <label htmlFor="">Nama</label>
        <input
          type="text"
          name="nama"
          // default nama State is empty sting, we controll the input by state
          value={nama}
          onChange={function (event) {
            // check inputted value
            // console.log(event.target.value)

            // set inputted value to name State
            setNama(event.target.value);
          }}
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </>
  );
}

ReactDOM.render(<App />, root);
