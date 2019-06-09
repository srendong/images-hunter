import React, { Component } from 'react'

class Search extends Component{

    render (){
        return(
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" className="form-control form-control-lg" placeholder="Search your image"/>
                </div>
            </div>
        );
    }
}

export default Search;