import React from 'react'

const Image = (props) => {
    const {largeImageURL,likes,previewURL,tags} = props.image
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card alto">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{likes}Likes</p>
                    
                    <a href={largeImageURL} target="_blank" className="btn btn-secondary btn-block" >Show image</a>
                </div>
            </div>
        </div>
    )
}

export default Image