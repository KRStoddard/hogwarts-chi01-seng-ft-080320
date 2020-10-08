import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Hog from './Hog'
import Filter from './Filter'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogstart: hogs,
      hogs: hogs,
      filter: "",
      checked: false
    }
  }

  onSelect = (selection) => {
    this.setState({filter: selection})
    this.hogSort(selection)
  }

  hogSort = selection => {
      let newHogs = this.state.hogs.sort(function(a, b){
        if(a[selection] < b[selection]) { return -1; }
        if(a[selection] > b[selection]) { return 1; }
        return 0;
    })
      this.setState({hogs: newHogs})
  }
 
  onCheck = e => {
    this.setState({checked: e.target.checked})
    if (e.target.checked === true) {
    const newHogs = this.state.hogstart.filter(hog => hog.greased === this.state.checked)
    this.setState({hogs: newHogs})
    }
    else {
      this.setState({hogs: this.state.hogstart})
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter onSelect={this.onSelect} onCheck={this.onCheck}/>
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
