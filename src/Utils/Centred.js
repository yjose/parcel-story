import React from "react";
const Centred = Comp => props => (
  <div className="centred">
    <Comp {...props} />
  </div>
);

export default Centred;
