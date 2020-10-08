import React, { Fragment } from "react";
import Hog from './Hog'

class HogContainer extends React.Component {
  
  hogsArray = () => {
    return this.props.hogs.map((hog, idx) => {
      return <Hog key={idx} hog={hog} />
    })
  }
  
  render() {
    return (
      <div className='hi three cards'>
        {this.hogsArray()}
      </div>
    );
  }
}

export default HogContainer;
