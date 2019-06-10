import React, { Component } from 'react'

class Search extends Component{

    searchRef = React.createRef();

    handleGetData = (e) => {
        e.preventDefault();

        //se toma el valor del input
        const readRef = this.searchRef.current.value;
        //se envia al componente ppal
        this.props.dataSearch(readRef)
    }

    render (){
        return(
            <form onSubmit={this.handleGetData}>
                <div className="row justify-content-center">
                    <div className="form-group col-md-12">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Search your image"/>
                    </div>
                    <div className="col-md-8">
                    <input type="submit" className="btn btn-danger btn-block " value=" Find my image..."/> 
                    </div>
                </div>
            </form>    
        );
    }
}

export default Search;