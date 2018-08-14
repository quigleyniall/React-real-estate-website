import React from 'react'
import './App.css'

const PropertyInfo = ({property}) => {
  return (
    <div className="propertyInfo">
      <img src={property.img_url} alt={property.summary} className="property-image" />
      <div className="property-main-details">
        <div className="property-title">{property.title}</div>
        <div className="property-lister"><i className="fas fa-pen"></i> {property.lister_name}</div>
        <div className="property-price">{property.price_formatted}</div>
      </div>
      <div className="property-details">
        <div className="property-heading">Home Details</div>
        <div className="property-sub-heading">Overview</div>
        <hr/>
        <div className="overview">
          {(property.property_type=='flat') ? (
            <div className="overview-items"><i className="fas fa-building"></i> {property.property_type}</div>
          ) : (
            <div className="overview-items"><i className="fas fa-home"></i>  {property.property_type}</div>
          )}
          <div className="overview-items"><i className="fas fa-bed"></i> {property.bedroom_number}</div>
          <div className="overview-items"><i class="fas fa-bath"></i> {property.bathroom_number}</div>
          <div className="overview-items">Car Space: {property.car_spaces}</div>
        </div>
        <div className="property-sub-heading">Additional Keywords</div>
        <hr/>
        <div className="overview-items">{property.keywords}</div>
        <div className="property-sub-heading">Description</div>
        <hr/>
        <div className="description">
          <div className="desc">{property.summary}</div>
        </div>
        <a target="_blank" href={property.lister_url} className="lister-url">Lister Url</a>
      </div>
    </div>
  )
}

export default PropertyInfo
