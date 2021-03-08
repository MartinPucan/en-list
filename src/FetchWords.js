import React, { useEffect, useState } from 'react';
import Table from 'antd/es/table';
import Layout from 'antd/es/layout';
import Config from "./config";

const FetchWords = () => {

    const columns = [
        {
            title: 'English',
            dataIndex: 'word',
            key: 'english'
        },
        {
            title: 'Czech',
            dataIndex: 'translate',
            key: 'czech'
        },
        {
            title: 'Description',
            dataIndex: 'definition',
            key: 'description'
        },
        {
            title: 'Example',
            dataIndex: 'sentence',
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
        <Layout>
            <Table dataSource={data} columns={columns} pagination={{ pageSize: 50 }} />
        </Layout>
    );
}

export default FetchWords;