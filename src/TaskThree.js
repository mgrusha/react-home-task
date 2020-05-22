import React from "react";

const Light = ({ color, isTurnedOn }) => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        backgroundColor: isTurnedOn ? color : "black",
      }}
    ></div>
  );
};

class TrafiicLights extends React.Component {
  state = { colorState: 1, interval: this.props.redTime };
  componentDidMount() {
    this.intervalID = setTimeout(() => {
      this.setState({
        colorState: 2,
        interval: this.props.yellowTime,
      });
    }, this.state.interval);
  }

  componentDidUpdate() {
    clearTimeout(this.intervalID);
    this.intervalID = setTimeout(() => {
      switch (this.state.colorState) {
        case 1:
          this.setState({
            colorState: 2,
            interval: this.props.yellowTime,
          });
          break;
        case 2:
          this.setState({
            colorState: 3,
            interval: this.props.greenTime,
          });
          break;
        case 3:
          this.setState({
            colorState: 4,
            interval: this.props.yellowTime,
          });
          break;
        case 4:
          this.setState({
            colorState: 1,
            interval: this.props.redTime,
          });
          break;
      }
    }, this.state.interval);
  }

  componentWillUnmount = () => {
    clearTimeout(this.intervalID);
  };

  render() {
    return (
      <>
        <Light
          color="red"
          isTurnedOn={
            this.state.colorState === 1 || this.state.colorState === 2
              ? true
              : false
          }
        />
        <Light
          color="yellow"
          isTurnedOn={
            this.state.colorState === 2 || this.state.colorState === 4
              ? true
              : false
          }
        />
        <Light
          color="green"
          isTurnedOn={this.state.colorState === 3 ? true : false}
        />
      </>
    );
  }
}

const TaskThree = () => {
  return (
    <>
      <h2>--------Task3----------</h2>
      <TrafiicLights redTime={4000} yellowTime={1000} greenTime={2000} />
    </>
  );
};

export { TaskThree };
