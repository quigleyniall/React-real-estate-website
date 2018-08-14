import React, {Component} from 'react'
import './App.css'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render() {
    const {home, links} = this.props
    return (
      <nav className="nav" style={home}>
        <Link to={`/`} className="nav-link" style={links}>Home</Link>
        <Link to={`/buy`} className="nav-link" style={links}>Buy</Link>
        <Link to={`/rent`} className="nav-link" style={links}>Rent</Link>
      </nav>
    )
  }
}
export default NavBar
