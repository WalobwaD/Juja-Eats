import React from "react"

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

import './App.css';

export default class App extends React.Component{
  render(){
    return(

      <div className="App">
        <h1>JUJA EATS <span class="fa-solid fa-utensils"></span></h1>
          <SearchBar/>
          <BusinessList/>
      </div>
    )
  }
}


