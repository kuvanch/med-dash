import {Button, Table,} from "antd";


export function Minster(){


    const dataSource = [
        {
            key: '1',
            name: 'Ibrohim',
            age: 32,
            address: '10 Downing Street',
            render: (text, record) => (
                 <Button type="primary">primary</Button>
            )

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
            title: 'Rasm',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Telefon raqam',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'email',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: "Ma'lumot",
            dataIndex: 'address',
            key: 'address',
        },
    ];

   return(
       <div>
           <h1><b>Vazir haqida ma'lumot</b></h1>
           <Table dataSource={dataSource} columns={columns} />
       </div>

)
}