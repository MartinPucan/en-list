import React from "react";

const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
                <div>
                    <a className="navbar-brand" href="#">Navbar</a>
                </div>
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Header;