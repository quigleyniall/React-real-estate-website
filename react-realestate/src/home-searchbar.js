import React, {Component} from 'react'
import './App.css'
import {Link} from 'react-router-dom'

class HomeSearchBar extends Component {
  constructor(){
    super();
    this.state = ({
      type: 'rent'
    })
  }

  onSearchChange = (event) => {
     this.setState({
       place: event.target.value,
     })
   }

render() {
  return (
    <div className="home">
      <div className="home-background">
        <div className="home-searchbar-details">
          <div className="home-search-title">Discover a place</div>
          <div className="home-search-title">you’ll love to live</div>
          <div className="home-search-button">
            <button
              className={this.state.type == 'buy' ? "button-active home-button button-1" : "button-notactive home-button button-1"}
              onClick={() => {this.setState({type: 'buy'})}}>Buy</button>
            <button
              className={this.state.type == 'rent' ? "button-active home-button button-2" : "button-notactive home-button button-2" }
              onClick={() => {this.setState({type: 'rent'})}}>Rent</button>
          </div>
          <div className="home-search-container">
            <input type="text" onChange={this.onSearchChange} className="home-search" name="homeSearch" placeholder="Search UK Listings..." />
            <Link
              to={{ pathname: this.state.type, state: {place: this.state.place}}}
              className="search-icon">
              <i className="fas fa-search"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default HomeSearchBar
