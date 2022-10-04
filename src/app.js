const root = document.querySelector("#root");

/**
 * CONDITIONAL RENDERING
 * 
 * : create a condition, while certain condition is fulfill, render certain
 * : component, if the condition isn't fulfill, render optional component
 * 
 * for example you create a login page, if the user is authorize, login page
 * will direct to another page, if not, stay in the login page.
 * 
 * note: when you create a state inside component, while the state is change
 *     : the component will be re-render 
 * 
 *

 *=> function App() {
 *=>     const [login, setLogin] = React.useState(false)

 *=>     if(login) {
 *=>         return (
 *=>             <>
 *=>             <h1>You already login</h1>
 *=>             <button
 *=>                 onClick={function() {
 *=>                     setLogin(false)
 *=>                 }}
 *=>             >Logout</button>
 *=>             </>
 *=>         
 *=>         )
 *=>     }

 *=>     return (
 *=>         <>
 *=>         <h1>Login!</h1>
 *=>         <button
 *=>             onClick={function() {
 *=>                 setLogin(true)
 *=>             }}
 *=>         >Login</button>
 *=>         </>
 *=>     )
 *=> }
 *
 */

 /**
  * CONDITIONAL RENDERING INSIDE JSX
  * 
  * you can't use if else conditional inside JSX, so the alternative to do 
  * that us use TERNARY OPERATOR
  * 
  */

function App() {
    const [login, setLogin] = React.useState(false)

    return (
        <>
        <h1>Application</h1>
        {/* basic idea
            <p>{login ? "You already login" : "you are not login"}</p> 
        */}
        {login ?
            <>
            <p><b>You already login</b></p>
            <button
                onClick={function () {
                    setLogin(false)
                }} 
            >Logout</button>
            </>
         :
            <>
            <p><i>you are not login</i></p>
            <button
                onClick={function(){
                    setLogin(true)
                }}
            >Login</button>
            </>
            }
        </>
   )
}

ReactDOM.render(<App />, root)