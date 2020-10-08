import React, { Fragment } from "react";
import HogContainer from './HogContainer'

class Hog extends React.Component {

    rename = (name) => {
        name = name.split(" ").join("_").toLowerCase()
        let url = require(`../hog-imgs/${name}.jpg`)
        return url
        
    }
    
    changeView = e => {
        this.props.addInfo(this)
    }
  
  render() {
      const {name, specialty, greased, weight, "highest medal achieved":highest} = this.props.hog
    console.log(this.rename(name))
    return (
      <div className = 'ui card pigTile' onClick={this.changeView}>
        <h1>{name}</h1>
        <img src={this.rename(name)} />
      </div>
    );
  }
}

export default Hog;