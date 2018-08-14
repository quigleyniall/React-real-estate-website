import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

const Results = ({ listings, hoverMap, resetMap }) => {
  return listings.map((item) => {
    return (
      <Link to={{ pathname: '/property', state: {property: item}}}>
      <a className="results" onMouseEnter={hoverMap} onMouseLeave={resetMap} name={item.title}>
        <img src={item.img_url} alt={item.summary} className="result-image" />
        <div className="result-title">{item.title}</div>
        <div className="result-details">
          <div className="result-lister"><i className="fas fa-pen"></i> {item.lister_name}</div>
          <div className="result-price">{item.price_formatted}</div>
          {(item.property_type=='flat') ? (
            <div className="result-property"><i className="fas fa-building"></i> {item.property_type}</div>
          ) : (
            <div className="result-property"><i className="fas fa-home"></i>  {item.property_type}</div>
          )}
          <div className="result-bedroom"><i className="fas fa-bed"></i>  {item.bedroom_number}</div>
       </div>
     </a>
   </Link>
    )
  })
}

export default Results
