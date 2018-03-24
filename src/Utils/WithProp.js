import React from "react";
import Prop from "./Prop";

const WithProp = Comp => (ps = {}) => {
  return class P extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { props: ps };
    }

    onPropsChange = props => {
      this.setState({ props: props });
    };

    render() {
      return (
        <div className="content">
          <Prop value={ps} onChange={this.onPropsChange} />
          <div style={{ flex: "1" }}>
            <Comp {...this.state.props} />
          </div>
        </div>
      );
    }
  };
};

export default WithProp;
