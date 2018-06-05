import React, { Component } from 'react';
import './App.css';
import TopLevelApp from '../Layouts/TopLevelApp'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
      <Route exact path = '/' component={TopLevelApp} />
      </Switch>
      </Router>
    );
  }
}

export default App;
