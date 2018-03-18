import React from "react";
import Centred from "./Centred";
import demo from "../style/demo.gif";

export default Centred(() => (
  <div style={{ textAlign: "center" }}>
    <h1>Welcome To parcel-storybook</h1>
    <h5> Tab Ctrl+P to open the stories palette</h5>
    <img height="600px" src={demo} />
  </div>
));
