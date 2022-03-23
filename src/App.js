import React, { Component } from "react";
import Navbar from "./components/Navbar";
import WhatToEat from "./components/WhatToEat";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <WhatToEat />
      </React.Fragment>
    );
  }
}

export default App;
