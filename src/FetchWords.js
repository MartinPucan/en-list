import React, { useEffect, useState } from 'react';
import Table from 'antd/es/table';
import Layout from 'antd/es/layout';

const FetchWords = () => {

    const [data,setData] = useState([]);

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

    const getData = () => {
        fetch('../words.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response) {
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
            });
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