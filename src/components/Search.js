import React from "react";

const Search = () => {
    return (
        <>
            <div className="container search-section">
                <div className="row justify-content-center px-2">
                    <div className="col-md-8">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                    <div className="col-md-4">
                        <select className="form-control">
                            <option selected>Choose filter...</option>
                            <option>Filter 1</option>
                            <option>Filter 2</option>
                            <option>Filter 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;