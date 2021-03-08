import React, { useEffect, useState } from 'react';
import Table from 'antd/es/table';
import Config from "./config";

const FetchWords = () => {

    const columns = [
        {
            title: 'English',
            dataIndex: 'english',
            key: 'english'
        },
        {
            title: 'Czech',
            dataIndex: 'czech',
            key: 'czech'
        },
        {
            title: 'Definition',
            dataIndex: 'definition',
            key: 'definition'
        },
        {
            title: 'Example',
            dataIndex: 'example',
            key: 'example'
        }
    ];

    const [data,setData] = useState([]);

    const getData = () => {
        fetch(`../${Config.getWordsJSON()}`
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
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
        <Table rowKey="" dataSource={data} columns={columns} pagination={{ pageSize: 50 }} />
    );
}

export default FetchWords;