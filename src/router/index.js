import { Switch, Route, Router } from 'react-router-dom'
import React, { Component } from 'react'
import Home from '../pages/home/index'
import About from '../pages/about/index'
export class index extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    )
  }
}

export default index
