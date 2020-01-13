import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// First we create our class
class Greeting extends React.Component {
  // Then we add our constructor which receives our prop
  constructor(props) {
    super(props);
    // Next we establish our state
    this.state = {
      name: "",
      greeting: `Good ${this.props.time}, `
    };
    // To use the 'this' keyword, we need to bind it to our function
    this.onChange = this.onChange.bind(this);
  }

  // A custom function to change the name in our state to match the user input
  onChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  // The render function, where we actually tell the browser what it should show
  render() {
    return (
      <div>
        <section className="section">
          <label className="label">Name:</label>
          <input
            className="input"
            name="name"
            placeholder="Enter your namesss..."
            onChange={this.onChange}
          />
        </section>
        <section className="section">
          <p>
            {this.state.greeting} {this.state.name}
          </p>
        </section>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!!!</h2>

      <h3>Hello</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    {" "}
    <App /> <Greeting time="me" />{" "}
  </div>,
  rootElement
);
