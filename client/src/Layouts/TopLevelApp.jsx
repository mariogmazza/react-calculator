import React, { Component } from 'react';
import './TopLevelApp.css';
import Calculator from '../Components/Calculator';

class TopLevelApp extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>A Simple ReactJS Calculator</h1>
        <br/>
      <div className="App-container">
     <Calculator />
     </div>
     <h4>by Mario Mazza</h4>
     </React.Fragment>
     
    );
  }
}

export default TopLevelApp;
