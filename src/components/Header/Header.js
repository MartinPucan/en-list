import React from "react";

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between mb-3">
                <div>
                    <a className="navbar-brand" href="/">English words</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/words">Words</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sentences">Sentences</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;