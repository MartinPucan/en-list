import React, { useMemo } from 'react';
import { useTable, useSortBy } from "react-table";
import { GROUPS_OF_COLUMNS } from "./Columns";
import WORDS from "./Words.json";

const TableWordsSorting = () => {

    const columns = useMemo(() => GROUPS_OF_COLUMNS, [])
    const data = useMemo(() => WORDS, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    },
        useSortBy)

    let numberOfWords = Object.keys(WORDS).length;

    return (
        <>
            <div className="alert alert-primary text-center" role="alert">
                Table contains {numberOfWords} words
            </div>
            <section className="table-responsive">
                <table {...getTableProps} className="table table-striped table-bordered table-dark">
                    <thead >
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' down' : ' up') : ''}
                                        </span>
                                    </th>
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
            </section>
        </>
    );
}

export default TableWordsSorting;