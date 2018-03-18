# parcel-storybook

Develop your components with parcel - A simple Alternative to storybook Using parceljs.

* Easy to use.
* Built with react, react-router and react-fuzzy-picker
* parceljs that's mean super fast 🚀
* Full customization 👌
* `Ctrl+p` Everywhere.

## Parcel-Storybook in action

![alt text](https://raw.githubusercontent.com/yjose/parcel-storybook/master/src/style/demo.gif)

## Getting Started

Clone parcel-storybook repository and install npm dependencies && start parcel dev server.

```
git clone https://github.com/yjose/parcel-storybook.git
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

Add your story in the index page `/src/stories/index.js` like the following :

```jsx
import Stories from "../Utils/Stories";
import Centred from "../Utils/Centred";
import Button from "../components/Button";
import Story from "./Story";

const Sts = new Stories();

Sts.add("Story", Centred(Story)).add("Button", Centred(Button));

export default Sts;
```

Now open your browser http://localhost:1234 and start your work

## Feedback

if you use this starter and in your opinion it helpful to create a npm package for it. let's me know - A simple star is enough ⚡️.
