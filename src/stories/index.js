import React from "react";
import Button from "../components/Button";
import Story from "./Story";
import Centred from "../Utils/Centred";

const storyProps = { text: "Parcel Storybook" };
const buttonProps = {
  name: "My Button",
  style: {
    margin: "10px",
    height: "30px",
    color: "black",
    background: "blue"
  }
};

export default [
  { name: "Story", component: Centred(Story), props: storyProps },
  { name: "Button", component: Centred(Button), props: buttonProps },
  {
    name: "without Prop",
    component: Centred(() => <button>Test without props</button>)
  }
];
