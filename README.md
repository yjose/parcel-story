# parcel-storybook

Develop your components with parcel - A simple Alternative to storybook Using parceljs.

* Easy to use.
* Built with react, react-router and react-fuzzy-picker
* parceljs that's mean super fast 🚀
* Full customization 👌
* `Ctrl+p` Everywhere.
* Play with props

## Parcel-Storybook in action

![alt text](https://raw.githubusercontent.com/yjose/parcel-storybook/master/src/demo.gif)

## Getting Started

Clone parcel-storybook repository and install npm dependencies && start parcel dev server.

```
git clone https://github.com/yjose/parcel-storybook.git
cd parcel-storybook
yarn install
yarn start
```

Create A simple Story

```jsx
import React from "react";

export default () => (
  <div>
    <h1>Simple Lorem Story </h1>
  </div>
);
```

Add your story in the index page `/src/stories/index.js` and export your stories as array like the following :

```jsx
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
  {
    name: "Story",
    component: Centred(Story),
    props: storyProps // adding props
  },
  {
    name: "Button",
    component: Centred(Button),
    props: buttonProps
  },
  {
    name: "without Prop", // without props
    component: Centred(() => <button>Test without props</button>)
  }
];
```

Now open your browser http://localhost:1234 and start your work

## Feedback

if you are using this starter and in your opinion it helpful to create a npm package for it. let's me know - A simple star is enough - ⚡️.
