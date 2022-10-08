const root = document.querySelector("#root");
/**
 * Making list using normal HTML list element
 * 
 * it's quite simple, you just create normal HTML list the insert it into JSX
 */
// function App() {
//     return (
//         <ul>
//             <li>Apple</li>
//             <li>Grape</li>
//             <li>Pineaple</li>
//             <li>Orange</li>
//         </ul>
//     )
// }

/**
 * List element using Object
 * 
 * This part is userful in future if you want to get data from database or 
 * external API.
 */

function App() {
  const fruits = ['Apple', 'Grape', 'Pineaple', 'Orange'];
  return /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit) {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, "fruit");
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);