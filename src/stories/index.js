import Stories from "../Utils/Stories";
import Centred from "../Utils/Centred";
import WithProp from "../Utils/WithProp";
import Button from "../components/Button";
import Story from "./Story";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const Sts = new Stories();

const storyProps = { text: "youssef Here" };
const buttonProps = {
  name: "My Button",
  style: {
    margin: "10px",
    height: "40px",
    color: "red",
    background: "blue"
  }
};

Sts.add("Story", WithProp(Story)(storyProps)).add(
  "Button",
  WithProp(Button)(buttonProps)
);

export default Sts;
