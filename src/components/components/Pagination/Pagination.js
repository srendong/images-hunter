import React from 'react'

const Pagination = (props) =>{

    return(
        <div className= "py-3">
            <button onClick={props.backPage} className="btn btn-warning mr-1"> ... Back </button>
            <button onClick={props.nextPage} className="btn btn-warning">  Next ... </button>

        </div>
    )
}

export default Pagination
