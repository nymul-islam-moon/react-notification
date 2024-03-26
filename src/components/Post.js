import React from "react";

const Post = ( props ) => {

    const {name, flags, capital, population, area} = props.country;

    return (
        <div className="col-md-6">
            <div className="post-card card mb-4">
                {/*<img src={flags.png} alt={name.common} className="card-img-top"/>*/}
                <div className="card-body">
                    <h3 className="card-title text-center"><a href="show.html" className="text-decoration-none"> {name.common} </a></h3>
                    <p className="card-text">This is the description of the first post. It's designed to be visually
                        appealing and user-friendly.</p>
                </div>
            </div>
        </div>
    )
}

export default Post;