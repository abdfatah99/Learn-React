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
 *          functionNames("argument")
 *      }}>
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
    let name = stdIndentity 
    alert(`congratulation, ${name} click the button`);
}

const element = <button onClick={buttonClick.bind(this, "fatah")}>click Me</button>;

ReactDOM.render(element, root);
