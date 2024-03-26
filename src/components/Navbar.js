import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-custom bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Notification</a>
                    <div className="ml-auto">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Options
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="profile.html">Profile</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;