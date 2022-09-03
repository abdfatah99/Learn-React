const root = document.querySelector("#root")

console.log("hello world")

function tick(){
    const element = (
        <div>
            <h1>Time Now !!!</h1>
            { new Date().toLocaleTimeString() }
        </div>
    )
    ReactDOM.render(element, root)
}

setInterval(() => {
    tick()
}, 1000);