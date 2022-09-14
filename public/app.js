const root = document.querySelector("#root");
let elementStyle = {
  width: "200px",
  // you can just type 200 (number)
  height: "200px",
  // you can just type 200 (number)
  backgroundColor: "blue"
};
const element = /*#__PURE__*/React.createElement("div", {
  style: elementStyle
});
ReactDOM.render(element, root);