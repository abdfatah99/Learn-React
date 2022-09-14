const root = document.querySelector("#root");

function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Time Now !!!"), new Date().toLocaleTimeString());
  ReactDOM.render(element, root);
}

setInterval(() => {
  tick();
}, 1000);
ReactDOM.render(element, root);