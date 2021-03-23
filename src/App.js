import React, { Component } from "react";

import Characters from "./containers/Characters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Welcome to the Character Creator</li>
        </ol>
        <Characters />
      </div>
    );
  }
}

export default App;
