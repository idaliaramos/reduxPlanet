import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Planets from "./Planets";
// import ItemComponent from "./Components/ItemComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
    
        <Planets />
      </div>
    );
  }
}

export default App;
