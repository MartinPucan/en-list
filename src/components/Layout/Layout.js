import React from "react";
import Header from "../Header/Header";
import TableWords from "../TableWords/TableWords";

const Layout = () => {
    return(
        <div className="layout">
            <Header />
            <main className="container">
                <TableWords />
            </main>
        </div>
    )
}

export default Layout;