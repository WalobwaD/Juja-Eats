import React from "react"

import "./BusinessList.css"
import Business from "../Business/Business"


class BusinessList extends React.Component{
    render(){
        return(

            <div className="BusinessList">
                {this.props.businessesList.map(business =><Business business={business}/>)}
            </div>
        )
    }
}

export default BusinessList