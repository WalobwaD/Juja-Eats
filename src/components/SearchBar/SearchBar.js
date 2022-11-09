import React from "react"

import "./SearchBar.css"

class SearchBar extends React.Component{

    renderBySortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption=>{
            let sortByOptionValue = sortByOptions[sortByOption]
            return <li key={sortByOptionValue}></li>
        })
    }

    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderBySortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Restaurant" />
                    <input placeholder="Location"/>
                </div>
                <div className="SearchBar-submit">
                    <a>Search</a>
                </div>
            </div>
        )
    }

}

const sortByOptions = {
    "Best Match" : "best_match",
    "Highest Order": "rating",
    "Most Reviewed": "review_count"
}

export default SearchBar