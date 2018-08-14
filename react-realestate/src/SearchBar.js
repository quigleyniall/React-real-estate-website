import React, {Component} from 'react'
import './App.css'

class SearchBar extends Component {
  constructor(){
    super()
    this.state = ({
      bedroom: false,
      price: false,
      property: false
    })
  }

  showPrice = () => {
    this.setState({
      bedroom: false,
      price: !this.state.price,
      property: false
    })
  }

  showBedroom = () => {
    this.setState({
      bedroom: !this.state.bedroom,
      price: false,
      property: false
    })
  }

  showProperty = () => {
    this.setState({
      bedroom: false,
      price: false,
      property: !this.state.property
    })
  }

  render(){
    const { place , searchChange, selectChange } = this.props
        return (
          <form className="search">
            <input type="text" className="searchbox-input" onChange={searchChange} placeholder="Search UK Listings"/>
              <div className="property-wrapper">
                <div className="property"  onClick={this.showProperty}>Property {this.state.property ? (<i class="fas fa-angle-up"></i>) : (<i class="fas fa-angle-down"></i>)}</div>
                {this.state.property && (
                <div className="property-container">
                  <div className="property-item">
                    <input type="checkbox" onChange={selectChange} name="house" id="house"/>
                    <label for="house" className="property-label">House</label>
                  </div>
                  <div className="property-item">
                    <input type="checkbox" onChange={selectChange} name="flat" id="flat" />
                    <label for="flat" className="property-label">Flat</label>
                  </div>
                </div>
            )}
            </div>
            <div className="bedroom-wrapper">
              <div className="bedroom" onClick={this.showBedroom}>Bedrooms {this.state.bedroom ? (<i class="fas fa-angle-up"></i>) : (<i class="fas fa-angle-down"></i>)}</div>
            {this.state.bedroom && (
              <div className="bedroom-container">
              <select onChange={selectChange} value={this.props.value.bedroomMin} name="bedroomMin" id="bedrooms-min" className="bedrooms-min">
                <option value="0">Min</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
              <div class="dash"> - </div>
              <select onChange={selectChange} value={this.props.value.bedroomMax} name="bedroomMax" id="bedrooms-max" className="bedrooms-max">
                <option value="99">Max</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
            </div>
          )}
          </div>
            <div className="price-wrapper">
              <div className="price" onClick={this.showPrice}>Price {this.state.price ? (<i class="fas fa-angle-up"></i>) : (<i class="fas fa-angle-down"></i>)}</div>
            {this.state.price && (
              <div className="price-container">
              <select onChange={selectChange} value={this.props.value.priceMin} id="price-min" name="priceMin" className="priceMin">
                <option value="0">No Min</option>
                <option value="10000">£10k</option>
                <option value="20000">£20k</option>
                <option value="30000">£30k</option>
                <option value="50000">£50k</option>
                <option value="100000">£100k</option>
                <option value="130000">£130k</option>
                <option value="150000">£150k</option>
                <option value="200000">£200k</option>
                <option value="250000">£250k</option>
                <option value="300000">£300k</option>
                <option value="350000">£350k</option>
                <option value="400000">£400k</option>
                <option value="450000">£450k</option>
                <option value="500000">£500k</option>
                <option value="550000">£550k</option>
                <option value="600000">£600k</option>
                <option value="650000">£650k</option>
                <option value="700000">£700k</option>
                <option value="750000">£750k</option>
                <option value="800000">£800k</option>
                <option value="850000">£850k</option>
                <option value="900000">£900k</option>
                <option value="1000000">£1Mk</option>
                <option value="1100000">£1.1M</option>
                <option value="1200000">£1.2M</option>
                <option value="1300000">£1.3M</option>
                <option value="1400000">£1.4M</option>
                <option value="1500000">£1.5M</option>
                <option value="1600000">£1.6M</option>
                <option value="1700000">£1.7M</option>
                <option value="1800000">£1.8M</option>
                <option value="1900000">£1.9M</option>
                <option value="2000000">£2M</option>
                <option value="2250000">£2.25M</option>
                <option value="2500000">£2.5M</option>
                <option value="2750000">£2.75M</option>
                <option value="3000000">£3M</option>
                <option value="3500000">£3.5M</option>
                <option value="4000000">£4M</option>
                <option value="5000000">£5M</option>
                <option value="10000000">£10M</option>
                <option value="20000000">£20M</option>
              </select>
              <div className="dash"> - </div>
              <select onChange={selectChange} value={this.props.value.priceMax} id="price-max" name="priceMax" className="priceMax">
                <option value="0">No Max</option>
                <option value="10000">£10k</option>
                <option value="20000">£20k</option>
                <option value="30000">£30k</option>
                <option value="50000">£50k</option>
                <option value="100000">£100k</option>
                <option value="130000">£130k</option>
                <option value="150000">£150k</option>
                <option value="200000">£200k</option>
                <option value="250000">£250k</option>
                <option value="300000">£300k</option>
                <option value="350000">£350k</option>
                <option value="400000">£400k</option>
                <option value="450000">£450k</option>
                <option value="500000">£500k</option>
                <option value="550000">£550k</option>
                <option value="600000">£600k</option>
                <option value="650000">£650k</option>
                <option value="700000">£700k</option>
                <option value="750000">£750k</option>
                <option value="800000">£800k</option>
                <option value="850000">£850k</option>
                <option value="900000">£900k</option>
                <option value="1000000">£1Mk</option>
                <option value="1100000">£1.1M</option>
                <option value="1200000">£1.2M</option>
                <option value="1300000">£1.3M</option>
                <option value="1400000">£1.4M</option>
                <option value="1500000">£1.5M</option>
                <option value="1600000">£1.6M</option>
                <option value="1700000">£1.7M</option>
                <option value="1800000">£1.8M</option>
                <option value="1900000">£1.9M</option>
                <option value="2000000">£2M</option>
                <option value="2250000">£2.25M</option>
                <option value="2500000">£2.5M</option>
                <option value="2750000">£2.75M</option>
                <option value="3000000">£3M</option>
                <option value="3500000">£3.5M</option>
                <option value="4000000">£4M</option>
                <option value="5000000">£5M</option>
                <option value="10000000">£10M</option>
                <option value="20000000">£20M</option>
              </select>
              </div>
            )}
            </div>
          </form>
        )
      }
}


export default SearchBar
