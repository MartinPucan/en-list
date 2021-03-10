import React from 'react';
import Table from 'react-bootstrap/Table';
import Words from "./Words";

const FetchWords = () => {
    return (
        <main className="container">
            <Table striped bordered hover responsive>
                <thead className="thead-dark rounded">
                <tr>
                    <th>#</th>
                    <th>English</th>
                    <th>Czech</th>
                    <th>Definition</th>
                    <th>Example</th>
                </tr>
                </thead>
                <tbody>
                { Words.map((item, index) =>
                    <tr>
                        <td key={index + 1}>{index + 1}</td>
                        <td>{item.english}</td>
                        <td>{item.czech}</td>
                        <td>{item.definition}</td>
                        <td>{item.example}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </main>
    );
}

export default FetchWords;