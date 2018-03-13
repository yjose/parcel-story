import React from "react";
import Centred from "../Utils/Centred";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Your First Story </h1>
      </div>
    );
  }
}

export default Centred(Test);
