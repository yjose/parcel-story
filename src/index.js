import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Utils/Home";
import Palette from "./Utils/Palette";
import WithProp from "./Utils/WithProp";
import Stories from "./stories/index";

import "./style/index.scss";

//const Components = Object.entries(require("./stories/*.js"));
const App = () => (
  <Router>
    <div className="main">
      <Palette />
      <Route exact path="/" component={Home} />
      {Stories.map(({ name, component, props }, i) => {
        const Component = !!props ? WithProp(component)(props) : component;
        return <Route key={i} exact path={`/${name}`} component={Component} />;
      })}
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
