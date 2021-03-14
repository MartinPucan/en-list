import React from "react";
import WORDS from "./Words.json";

const TableInfo = () => {

    let numberOfWords = Object.keys(WORDS).length;

    return(
        <div className="alert alert-primary text-center" role="alert">
            Table contains {numberOfWords} words
        </div>
    )
}

export default TableInfo;