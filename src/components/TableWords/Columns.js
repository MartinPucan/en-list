export const COLUMNS = [
    {
        Header: 'English',
        accessor: 'english'
    },
    {
        Header: 'Czech',
        accessor: 'czech'
    },
    {
        Header: 'Definition',
        accessor: 'definition'
    },
    {
        Header: 'Example',
        accessor: 'example'
    }
];

export const GROUPS_OF_COLUMNS = [
    {
        Header: 'Words',
        columns: [
            {
                Header: 'English',
                accessor: 'english'
            },
            {
                Header: 'Czech',
                accessor: 'czech'
            },
        ]
    },
    {
        Header: 'Explanation',
        columns: [
            {
                Header: 'Definition',
                accessor: 'definition'
            },
            {
                Header: 'Example',
                accessor: 'example'
            }
        ]
    }
]