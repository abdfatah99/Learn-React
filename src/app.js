const root = document.querySelector("#root");

/**
 * in normal HTML, you can use an event like this
 * <button onclick="namaFunc()"></button>
 *
 * what make different?
 * HTML -> lowercase -> onclick="funcName()"
 * React -> camelCase -> onClick={functionName}
 *                               -> not using string ""
 *                               -> using curly brackets,
 *                               -> this because we call js function
 *
 * when you insert the functionName to the react element, you don't
 * need to use parentheses, because using parentheses would execute
 * the function immediately when you load the page, you don't want this.
 * You just want to execute the function if the function is called
 * using button
 *
 * !THE PROBLEM
 * What if we want to give an argument to the function?
 * 1. using function
 *      <button onClick={function() {
 *              functionNames("argument")
 *          }
 *      }>
 *      click me
 *      </button>
 *
 * 2. using bind
 *      <button onClick={functionNames.bind(this, "argument")}>
 *          click me
 *      </button>
 *
 *    if you console the -functionNames.bind(this, 'argument')-
 *    it will create/produce new function with that argument
 *    this keyword is used to reference the function (functionNames)
 *
 * recap
 *  1. define the event name
 *  2. define the value -> function, you can abstraction the function,
 *                         or you can call immediately
 */

function buttonClick(stdIndentity) {
    let name = stdIndentity;
    alert(`congratulation, ${name} click the button`);
}

const ButtonHandlerBind = (
    <button onClick={buttonClick.bind(this, "fatah")}>Click Me</button>
);

// ======================= Adding Interactivity ================================
// remember that this file using React.createElement() function to create element
// you can't directory create Function Component
// later you have to practice it using Function Component

// list of component that you have to create
// 1. Button { element: <button>, children: { children }}
// 2. Toolbar { element: Fragment { children: [Button, Button] } }
// 3. MainApp { element: Toolbar}

/**
 * The button only receive and run the function of onClick handler.
 *
 * Notes:
 * 1. This Button Component is a function
 * 2. To be able to call this function component as a component, you need to
 *    invoke the function.
 * 
 * Functional component of Button
 * -> function Button({ onClick, children }){
 * ->   return (
 * ->       <button onClick={onClick}>{children}</button>
 * ->   )
 * -> }
 *
 * @param {htmlOnClick} onClick - Click event handler
 * @returns {JSX.Element}
 */

const Button = ({ onClick, children }) =>
    React.createElement(
        "button",
        {
            onClick: onClick,
        },
        children
    );

// const MainApp = React.createElement();

function MainApp() {
    // return (
    //     // <Toolbar
    //     //     postMessage={() => alert("Posting a message")}
    //     //     uploadImage={() => alert("Upload an image")}
    //     // />
    // );

    Toolbar({
        postMesage: () => alert("Posting a message"),
        uploadImage: () => alert("Upload an Image"),
    });
}

/**
 * Another example from Adding Interactivity
 *
 * @param {ClickHandler} handler - The clik handler for Post Message
 * @param {ClickHandler} handler - The clik handler for Upload Image
 */
function Toolbar({ postMessage, uploadImage }) {
    // return (
    //     <>
    //         <Button onClick={postMessage}>Post Message</Button>
    //         <Button onClick={uploadImage}>Upload Image</Button>
    //     </>
    // );

    return React.createElement(
        React.Fragment,
        {},
        Button({ onClick: postMessage, children: "Post Message" }),
        Button({ onClick: uploadImage, children: "Upload Image" })
    );
}


/**
 * Because i want to render all component:
 * - handler function for JSX (using bind)
 * - Add interactivity for component
 *
 * I have to use Fragment from react to make it able to render multiple
 * component at the same time without wrapping it using another tag.
 */

const element = React.createElement(React.Fragment, {
    children: [ButtonHandlerBind],
});

ReactDOM.render(element, root);
