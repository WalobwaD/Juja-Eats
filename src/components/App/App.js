import React from "react"

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
// import Yelp from '../../util/Yelp';

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
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     businesses : []
  //   }

  //   this.searchYelp = this.searchYelp.bind(this)
  // }

  searchYelp(term, location, sortBy){
    // Yelp.search(term, location,sortBy).then(businesses=>{
    //   this.setState({businesses:businesses})
    // })
    return console.log(`Search Yelp with ${term}, ${location}, ${sortBy}`)
  }
  render(){
    return(

      <div className="App">
        <h1>JUJA EATS <span className="fa-solid fa-utensils"></span></h1>
          <SearchBar
          searchYelp = {this.searchYelp}
          />
          <BusinessList businesses = {businesses}/>
      </div>
    )
  }
}


