const root = document.querySelector("#root");

let elementStyle = {
    width: "200px", // you can just type 200 (number)
    height: "200px", // you can just type 200 (number)
    backgroundColor: "blue",
};

const element = <div style={elementStyle}></div>;

ReactDOM.render(element, root);