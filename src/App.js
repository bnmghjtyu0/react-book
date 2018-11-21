import { Switch, Route, Router } from 'react-router-dom'
import Routes from './router/index'


import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Routes}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
