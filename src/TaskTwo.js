import React from "react";

class AnotherColor extends React.Component {
  state = { color: "yellow" };

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ color: "blue" });
    }, 5000);
  }
  componentWillUnmount = () => {
    clearTimeout(this.timeoutId);
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.color,
          width: "50px",
          height: "50px",
        }}
      />
    );
  }
}

const TaskTwo = () => {
  return (
    <>
      <h2>--------Task2----------</h2>
      <AnotherColor />
    </>
  );
};

export { TaskTwo };
