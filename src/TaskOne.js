import React from "react";

class UpperCaseText extends React.Component {
  render() {
    return <h2>{this.props.text.toLocaleUpperCase()}</h2>;
  }
}

const TaskOne = () => {
  return (
    <>
      <h2>--------Task1----------</h2>
      <UpperCaseText text="transformed text" />
    </>
  );
};

export { TaskOne };
