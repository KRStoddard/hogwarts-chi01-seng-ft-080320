import React, { Fragment } from "react";
import HogContainer from './HogContainer'

class Hog extends React.Component {

    constructor(props) {
        super()
        this.state = {
            showInfo: false
        }
        
    }

    rename = (name) => {
        name = name.split(" ").join("_").toLowerCase()
        let url = require(`../hog-imgs/${name}.jpg`)
        return url
        
    }
    
    changeView = e => {
        this.setState({showInfo: !this.state.showInfo})
    }

    hiddenInfo = () => {
        return <button onClick={this.changeView}>Show Hog Info</button>
    }

    shownInfo = (args) => {
        return <div>
            <p> Specialty: {args.specialty} </p>
            <p> {`Greased: ${args.greased}`} </p>
            <p> Weight: {args.weight} </p>
            <p>Highest Medal Earned: {args.highest.toUpperCase()} </p>
            <button onClick={this.changeView}>Hide Info</button>
        </div>
    }
    
  
  render() {
    const {name, specialty, greased, weight, "highest medal achieved":highest} = this.props.hog
    return (
      <div className = 'ui card pigTile' onClick={this.changeView}>
        <h1>{name}</h1>
        <img src={this.rename(name)} />
        {this.state.showInfo? this.shownInfo({name, specialty, greased, weight, highest}) : this.hiddenInfo()}
      </div>
    );
  }
}

export default Hog;