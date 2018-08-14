import React, { Component } from 'react';
import './App.css';
import Map from './Map'
import SearchBar from './SearchBar'
import Results from './Results'
import NavBar from './Navbar'
import request from 'request'

class RealEstate extends Component {
  constructor(){
    super();
    this.state = ({
      listings: [],
      totalPages: 0,
      place: 'London',
      priceMin: 0,
      priceMax: 9999999999999999999999999999999999999,
      bedroomMax: 10,
      bedroomMin: 1,
      results: 20,
      sort: 'relevancy',
      hoverActive: '',
      showingInfoWindow: false
    })
    this.listings = this.listings.bind(this)
  }
  componentDidMount() {
    {this.listings()}
}

listings() {
  let {place} = this.state
  const {priceMin, priceMax, bedroomMin, bedroomMax, results, sort} = this.state
  const {type} = this.props
  // props passdown from homepage searchbar, if user came from homepage search what the user typed in
  if(this.props.location.state && this.props.location.state.place){
    place = this.props.location.state.place
    fetch(`https://react-realestate-backend.herokuapp.com/${place}/${type}/${priceMin}/${priceMax}/${bedroomMin}/${bedroomMax}/${results}/${sort}`)
      .then(response => response.json())
      .then(resp => resp.response.listings)
      .then(users => this.setState({ listings: users }))

    return this.props.location.state.place = false;
//  else use the searchbar on the current page i.e. place from state
} else {
  fetch(`https://react-realestate-backend.herokuapp.com/${place}/${type}/${priceMin}/${priceMax}/${bedroomMin}/${bedroomMax}/${results}/${sort}`)
    .then(response => response.json())
    .then(resp => resp.response.listings)
    .then(users => this.setState({ listings: users }))
}

}

onSearchChange = (event) => {
  event.preventDefault()
   this.setState({
     place: event.target.value
   }, () => {this.listings()})
 }

 onSelectChange = (event) => {
   this.setState({
     [event.target.name]: event.target.value
   }, () => {this.listings()})
 }

 onHoverMap = (event) => {
   this.setState({
     hoverActive: event.currentTarget.name
   })
 }
 resetMap = (event) => {
   this.setState({
     hoverActive: ''
   })
 }

 propertyInfo = (event) =>  {
   this.setState({
     showPropertyInfo: true,
     listingDetails: event.currentTarget.name
   })
 }

  render() {
    const mapStyle = {
      width: '100%',
      height: '90vh'
    }
    const {hoverActive, showingInfoWindow, listings} = this.state
    return (
      <div className="App">
          <NavBar/>
        <SearchBar searchChange={this.onSearchChange} selectChange={this.onSelectChange} value={this.state}/>
        <div className="map-details">
          <Map listings={listings} hoverActive={hoverActive} mapStyle={mapStyle} />
        </div>
        <div className="result-listings">
          <Results listings={listings} hoverMap={this.onHoverMap} resetMap={this.resetMap} propertyInfo={this.propertyInfo}/>
        </div>
      </div>
    );
  }
}

export default RealEstate;
