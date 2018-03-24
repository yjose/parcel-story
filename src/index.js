import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Utils/Home";
import Palette from "./Utils/Palette";
import Components from "./stories/index";

import "./style/index.scss";

//const Components = Object.entries(require("./stories/*.js"));
const App = () => (
  <Router>
    <div className="main">
      <Palette />
      <Route exact path="/" component={Home} />
      {Components.list.map(({ storyName, Component }, i) => (
        <Route key={i} exact path={`/${storyName}`} component={Component} />
      ))}
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
