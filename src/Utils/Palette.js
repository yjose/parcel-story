import React from "react";

import { withRouter } from "react-router";

import { FuzzyPicker, FuzzyWrapper } from "react-fuzzy-picker";
import Components from "../stories"; //   const Sts = Object.entries(require("./stories/*.js"));
const Palette = props => (
  <FuzzyWrapper
    isKeyPressed={e => {
      // Press slash.
      return e.ctrlKey && e.keyCode == 80;
    }}
    popup={(isOpen, onClose) => (
      <FuzzySearchExample isOpen={isOpen} {...props} onClose={onClose} />
    )}
  />
);

const FuzzySearchExample = props => (
  <FuzzyPicker
    {...props}
    onChange={choice => {
      props.history.push(`/${choice.storyName}`);
      props.onClose();
    }}
    items={Components.list}
    itemValue={item => item.storyName}
    renderItem={item => <span className="item-wrapper">{item.storyName}</span>}
  />
);

export default withRouter(Palette);
