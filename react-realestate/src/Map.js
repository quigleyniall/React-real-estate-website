import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
   showingInfoWindow: false,
   activeMarker: {},
   selectedPlace: {},
   correctWindow: ''
 };
    this.setMap = this.setMap.bind(this)
  }

 onMarkerClick = (props, marker, e) =>
 // taken from the docs then add correctWindow to only show the infoWindow for the marker clicked and not all of them
   this.setState({
     selectedPlace: props,
     activeMarker: marker,
     showingInfoWindow: true,
     correctWindow: props.title
   });


   onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

setMap(){
  // only run if got something back from the api call
  if(this.props.listings.length >= 1){
    const {listings, hoverActive} = this.props
    let points = listings.map((location) => {
      return {lat: location.latitude, lng: location.longitude}
    })
// readjusts view so all markers can be seen
let bounds = new this.props.google.maps.LatLngBounds();
for (var i = 0; i < points.length; i++) {
  bounds.extend(points[i]);
}
let {mapStyle} = this.props
 return (
   <Map
         google={this.props.google}
         style={mapStyle}
         initialCenter={{
           lat: this.props.listings[0].latitude,
           lng: this.props.listings[0].longitude
         }}
         onClick={this.onMapClicked}
         zoom={11}
         bounds={bounds}>

         {listings.map((location, index) => {
           return (
             <Marker
                key={index}
                title={location.title}
                onClick={this.onMarkerClick}
                position={{lat: location.latitude, lng: location.longitude}}>
            </Marker>
           )
         })}
         {listings.map((location, index) => {
           return (
         <InfoWindow
           key={index}
           visible={(this.state.showingInfoWindow && (location.title === this.state.correctWindow)) || (location.title === hoverActive)}
           position={{lat: location.latitude, lng: location.longitude}}>
           <div className="infoWindow">
             <img src={location.img_url} alt={location.summary} className="infoWindow-image" />
             <div className="infoWindow-title">{location.title}</div>
             <div className="infoWindow-details">
               <div className="infoWindow-price">{location.price_formatted}</div>
               <div className="infoWindow-bedroom"><i className="fas fa-bed"></i> {location.bedroom_number}</div>
            </div>
           </div>
       </InfoWindow>
     )})}
        </Map>
   )
  }
}

  render() {
    return (
      <div>
        {this.setMap()}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBF2x5mwWyowG5eXAPUjQfi9ATuwDzTbAI'
})(MapContainer)
