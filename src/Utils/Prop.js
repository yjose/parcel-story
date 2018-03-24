import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/javascript/javascript");

class Prop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: toJson(this.props.value),
      validData: this.props.value,
      valid: true
    };
  }

  onChange = (editor, data, value) => {
    this.setState({ valid: true, value });
    try {
      this.setState({ validData: fromJson(this.state.value) });
      this.props.onChange(this.state.validData);
    } catch (err) {
      this.setState({ valid: false, value });
    }
  };

  render() {
    const options = {
      theme: "material",
      height: "auto",
      viewportMargin: Infinity,
      mode: {
        name: "javascript",
        json: true,
        statementIndent: 2
      },
      lineNumbers: true,
      lineWrapping: true,
      indentWithTabs: false,
      tabSize: 2
    };

    const { valid, value, validData } = this.state;
    return (
      <div className="props-editor">
        <div className={`json-valid ${valid ? " valid " : " invalid "}`}>
          {" "}
          {valid ? "Valid " : "Non valid"}
        </div>
        <CodeMirror
          value={value}
          options={options}
          onBeforeChange={this.onChange}
          onChange={(editor, data, value) => {}}
        />
      </div>
    );
  }
}

export default Prop;

const fromJson = json => JSON.parse(json);
const toJson = val => JSON.stringify(val, null, 2);

const jsonExemple = {
  text: "test props",
  visible: true,
  array: ["test1", "test2"]
};
