import React from "react";
import ReactDOM from "react-dom";
import moment from "moment-timezone";
import "./style.css";

// demo 1
/* ReactDOM.render(
  <div>
    <h1>hello React</h1>
  </div>,
  document.getElementById("index")
); */

/* setInterval(function(){
  ReactDOM.render(
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>,
    document.getElementById("index")
  );
}, 1000); */

// demo 2
/* class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  // override
  componentWillMount() {
    console.log("component will mount");
  }

  render() {
    return (
      <div>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }

  // override
  componentDidMount() {
    // setInterval(() => this.setState({ time: new Date() }), 1000);
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
    console.log("component did mount");
  }

    // override
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
    // override
  shouldComponentUpdate() {} 

  // override
  componentWillUpdate() {}

  // override
  componentDidUpdate() {}
}

ReactDOM.render(<Clock />, document.getElementById("index")); */

// demo 3
const cityArray = ["sydney", "new york", "seoul", "london"];
const colorArray = ["bg-color1", "bg-color2", "bg-color3", "bg-color4"];
const information = [];
for (let i = 0; i < cityArray.length; i++) {
  information.push({
    city: cityArray[i],
    color: colorArray[i]
  });
}

function inputToIdentifier(input) {
  switch (input.toLowerCase()) {
    case "sydney":
      return "Australia/Sydney";
    case "new york":
      return "America/New_York";
    case "seoul":
      return "Asia/Seoul";
    case "london":
      return "Europe/London";
    default:
      throw new Error(`City ${input} you have input cannot be recognized.`);
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {}

  // override
  componentDidMount() {
    // setInterval(() => this.setState({ time: new Date() }), 1000);
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
    console.log("component did mount");
  }
}

class WorldClock extends Clock {
  render() {
    const timemDisplay = moment(this.state.time)
      .tz(inputToIdentifier(this.props.city))
      .format("ddd MMM DD YYYY-HH-mm-ss")
      .split("-");
    return (
      <div className="container">
        <div className="date-part">{timemDisplay[0]}</div>
        <div className="content-part">
          <p>{this.props.city.toUpperCase()}</p>
          <p>
            <span className="clock-time">{timemDisplay[1]}</span>
            <span className="clock-colon">:</span>
            <span className="clock-time">{timemDisplay[2]}</span>
            <span className="clock-colon">:</span>
            <span className="clock-time">{timemDisplay[3]}</span>
          </p>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div id="wrapper">
      <ul id="clock-options">
        {information.map((x, index) => (
          <li key={index} id={x.color} className="option">
            <WorldClock city={x.city} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("index"));

// demo 4
/* class StopWatch extends React.Component {
  stop = () => {};
  start = () => {};

  render() {
    return (
      <div>
        <h1>{this.}</h1>
        <button onClick={this.stop}>Stop Watch</button>
        <button onClick={this.start}>Start Watch</button>
      </div>
    );
  }
}

ReactDOM.render(<StopWatch />, document.getElementById("index")); */
