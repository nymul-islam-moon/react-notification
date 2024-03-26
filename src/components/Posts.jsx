import React from "react";
import { v4 as uuidv4 } from "uuid";
import Post from "./Post";
const Posts = (props) => {
    return (
        <div className="container mt-4">
            <div className="row">
                {props.countries.map((country) => {
                    const countryNew = {country, id: uuidv4()}
                    return <Post {...countryNew} key={countryNew.id}/>
                })}
            </div>
        </div>
    )
}

export default Posts;