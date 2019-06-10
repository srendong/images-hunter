import React from 'react'

const Pagination = (props) =>{

    return(
        <div className= "py-3">
            <button onClick={props.backPage} className="btn btn-danger mr-1"> ... Back </button>
            <button onClick={props.nextPage} className="btn btn-danger">  Next ... </button>

        </div>
    )
}

export default Pagination
