import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import Config from "./config";

const FetchWords = () => {

    const [data,setData] = useState([]);

    const getData = () => {
        fetch(`../${Config.getWordsJSON()}`
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                setData(myJson);
            })
    }
    useEffect(() => {
        getData()
    },[])

    return (
        <Table striped bordered hover variant="dark">
        {/*<Table rowKey="" dataSource={data} columns={columns} pagination={{ pageSize: 50 }} />*/}
            <thead>
            <tr>
                <th>#</th>
                <th>English</th>
                <th>Czech</th>
                <th>Definition</th>
                <th>Example</th>
            </tr>
            </thead>
            <tbody>
            { data.map( item =>
                <tr>
                    <td>{item.index}</td>
                    <td>{item.english}</td>
                    <td>{item.czech}</td>
                    <td>{item.definition}</td>
                    <td>{item.example}</td>
                </tr>
            )}
            </tbody>
        </Table>
    );
}

export default FetchWords;