const root = document.querySelector("#root");

/**
 * Maing list using normal HTML list element
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
    const fruits = ['Apple', 'Grape', 'Pineaple', 'Orange']

    return (
        <ul>
            {/* if you just call the element like this
                
                { 
                    fruits.map(function(fruit) {
                        return <li>{fruit}</li>
                    })
                } 
                
                it will cause a warning that each element should have a key
                to define the uniqueness.
                In the future or production, you can use like product id to
                define the key. 
                - each key should unique, other than that it will cause an error
                - key used by react to identify that this element is changeable

                why we use map?

                because we want to implement return statement, if you use forEach, 
                it wouldn't work, because it's not support.
            */}

            {
                fruits.map(function(fruit) {
                    return <li key={fruit}>{fruit}</li>
                })
            }
        </ul>
    )
}

ReactDOM.render(<App />, root)