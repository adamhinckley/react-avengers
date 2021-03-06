import React, { Component } from "react";
import "./App.css";
import avengers from "./avengers";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Avengers by Adam Hinckley</h1>
        </header>
        <div>
          {this.state.avengers.map(a => (
            <div key={a.name}>
              <p>
                Name: {a.name} Power: {a.power}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
