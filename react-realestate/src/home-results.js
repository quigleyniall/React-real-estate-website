import React, {Component} from 'react'
import './App.css'
import {Link} from 'react-router-dom'

class HomeResults extends Component {
  constructor(){
    super();
    this.state = ({
      listings: [],
      place: 'London',
      priceMin: 0,
      priceMax: 9999999999999999999999999999999999999,
      bedroomMax: 10,
      bedroomMin: 1,
      results: 8
    })
  }

 componentDidMount(){
   const {place, priceMin, priceMax, bedroomMin, bedroomMax, results} = this.state
   const {type, sort} = this.props
   fetch(`https://react-realestate-backend.herokuapp.com/${place}/${type}/${priceMin}/${priceMax}/${bedroomMin}/${bedroomMax}/${results}/${sort}`)
     .then(response => response.json())
     .then(resp => resp.response.listings)
     .then(users => this.setState({ listings: users }))
 }

render(){
const {listings} = this.state
  return listings.map((listing) => {
        return (
            <Link to={{ pathname: '/property', state: {property: listing}}} className="home-results">
              <img src={listing.img_url} alt={listing.summary} className="result-image" />
              <div className="result-title">{listing.title}</div>
              <div className="result-details">
                <div className="result-lister"><i className="fas fa-pen"></i> {listing.lister_name}</div>
                <div className="result-price">{listing.price_formatted}</div>
                  {(listing.property_type=='flat') ? (
                    <div className="result-property"><i className="fas fa-building"></i> {listing.property_type}</div>
                  ) : (
                    <div className="result-property"><i className="fas fa-home"></i>  {listing.property_type}</div>
                  )}
                <div className="result-bedroom"><i className="fas fa-bed"></i>  {listing.bedroom_number}</div>
              </div>
          </Link>
        )
      })
    }
}


export default HomeResults
