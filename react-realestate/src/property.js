import React, {Component} from 'react'
import './App.css'
import NavBar from './Navbar'
import PropertyInfo from './propertyInfo'
import Map from './Map'


class Property extends Component {

  render(){
    const {property} = this.props.location.state
    // set property to an array so it can passed as props to Map
    const arr = [property]
    const mapStyle = {
      width: '100%',
      height: '70vh'
    }
    return(
      <div className="property-wrapper">
        <NavBar/>
        <PropertyInfo property={property}/>
        <div className="property-map-details">
          <Map listings={arr} mapStyle={mapStyle}/>
        </div>
      </div>
    )
  }
}
export default Property
