import {Button, Table} from "antd";


export function Minster(){


    const dataSource = [
        {
            key: '1',
            name: 'Ibrohim',
            age: 32,
            address: '10 Downing Street',
            render: () => {
                <Button type="primary">primary</Button>
            }
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'ID',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Ism',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Mutaxasislik',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Toifasi',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'email',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return(
        <div>
            <h1><b>Online consultatsiya</b></h1>
            <Table dataSource={dataSource} columns={columns} />
        </div>

    )
}

