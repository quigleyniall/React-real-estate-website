import React, {Component} from 'react'
import './App.css'
import NavBar from './Navbar'
import HomeSearchBar from './home-searchbar'
import HomeResults from './home-results'

class Home extends Component {

  render(){
    const style = {
      backgroundColor: 'transparent',
      position: 'absolute',
      zIndex: 100
    }
    const links = {
      padding: '10px 15px',
      borderRadius: '5px',
      margin: '10px'
    }
    return(
      <div>
        <NavBar home={style} links={links} />
        <HomeSearchBar/>
        <div className="home-results-wrapper">
          <div className="home-results-title">London - High End  To Buy</div>
          <div className="home-results-container">
            <HomeResults type='buy' sort='price_highlow'/>
          </div>
          <div className="home-results-title">London - Cheapest Places to rent</div>
          <div className="home-results-container">
            <HomeResults type='rent' sort='price_lowhigh'/>
          </div>
          <div className="home-results-title">London - Newest Places on the Market</div>
          <div className="home-results-container">
            <HomeResults type='buy' sort='newest'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
