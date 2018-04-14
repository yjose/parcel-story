import React from "react";
import ReactDOM from "react-dom";
import StoryRouter from "story-router";
import "story-router/story-router.css";

// import stories from the stories folder
import Stories from "./stories/index";

const App = () => <StoryRouter stories={Stories} />;

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
