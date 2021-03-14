import React from "react";
import Header from "../Header/Header";
import TableWordsSorting from "../TableWords/TableWordsSorting";

const Layout = () => {
    return(
        <div className="layout">
            <Header />
            <main className="container">
                <TableWordsSorting />
            </main>
        </div>
    )
}

export default Layout;