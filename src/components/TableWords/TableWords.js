import React, { useMemo } from 'react';
import { useTable } from "react-table";
import { COLUMNS } from "./Columns";
import WORDS from "./Words.json";

const TableWords = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => WORDS, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    let numberOfWords = Object.keys(WORDS).length;

    return (
        <>
            <div className="alert alert-primary text-center" role="alert">
                Table contains {numberOfWords} words
            </div>
            <table {...getTableProps} className="table table-striped table-dark">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default TableWords;