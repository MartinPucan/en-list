import React from "react";
import Header from "../Header/Header";
import TableWordsSorting from "../TableWords/TableWordsSorting";
import TableInfo from "../TableWords/TableInfo";

const Layout = () => {
    return(
        <>
            <Header />
            <main className="container">
                <TableInfo />
                <TableWordsSorting />
            </main>
        </>
    )
}

export default Layout;