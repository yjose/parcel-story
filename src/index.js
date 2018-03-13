import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Utils/Home";
import Components from "./stories/index";

import "./style/index.scss";
import Palette from "./Palette";
//const Components = Object.entries(require("./stories/*.js"));
const App = () => (
  <Router>
    <div className="content">
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
