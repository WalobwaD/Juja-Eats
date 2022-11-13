import React from "react"

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

import './App.css';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

let businesses = [
  business,
  business,
  business,
  business,
  business,
  business

]
export default class App extends React.Component{

  searchYelp(term, location, sortBy){
    return console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}` )
}
  render(){
    return(

      <div className="App">
        <h1>JUJA EATS <span className="fa-solid fa-utensils"></span></h1>
          <SearchBar
          searchYelp = {this.searchYelp}
          />
          <BusinessList businessesList = {businesses}/>
      </div>
    )
  }
}


