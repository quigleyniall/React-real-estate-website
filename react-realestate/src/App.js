import React, {Component} from 'react'
import './App.css'
import request from 'request'
import Home from './home'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import RealEstate from './realestate'
import Property from './property'

class App extends Component {
  constructor(){
    super ();

  }
  render(){
    return (
      <Router>
        <div className="routes">
          <Route exact path='/' component={Home} />
          <Route path='/buy' render={props => <RealEstate type='buy' {...props} />} />
          <Route path='/rent' render={props => <RealEstate type='rent' {...props} />} />
          <Route path='/property' component={Property} />
        </div>
      </Router>
    )
  }
}

export default App
