import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Hog from './Hog'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs
    }
  }

  addInfo = () => {

  }

  render() {
    
    return (
      <div className="App">
        <Nav />
        <HogContainer hogs={this.state.hogs} addInfo={this.addInfo}/>
      </div>
    );
  }
}

export default App;
