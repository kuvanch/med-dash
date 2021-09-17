import { BankOutlined, ContainerOutlined, PlusSquareOutlined, UserSwitchOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { TableComponent } from '../components'


export const Home = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
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
                title: "Id",
                dataIndex: 'name',
                key: 'name',
            },
            {
              title: "Rasmmi",

            },
        {
            title: "Shifohona nomi",
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Manzil',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Telefon raqam',
            dataIndex: 'address',
            key: 'address',
        },
            {
              title: 'Shifohona admin',
            },
            {
                title: "Geolakatsiya ma'lumoti"
            }
        ];
    return (
        <Row gutter={[20,20]}>
            <Col span={12}>
                <Link to='/hospitals'>
                    <Card>
                    <PlusSquareOutlined style={{fontSize: '60px',textAlign: 'center'}}/>
                        <Typography.Title>
                            Shifoxonalar
                        </Typography.Title>
                    </Card>
                </Link>
            </Col>
            <Col span={12}>
                <Link to='/news'>
                    <Card>
                        <ContainerOutlined style={{fontSize: '60px',textAlign: 'center'}}/>
                        <Typography.Title >
                            Yangiliklar
                        </Typography.Title>
                    </Card>
                </Link>
            </Col>
            <Col span={12}>
                <Link to='/consalting'>
                    <Card>
                        <UserSwitchOutlined style={{fontSize: '60px',textAlign: 'center'}}/>
                        <Typography.Title >
                            Online Konsultatsiya
                        </Typography.Title>
                    </Card>
                </Link>
            </Col>
            <Col span={12}>
                <Card>
                    <BankOutlined style={{fontSize: '60px',textAlign: 'center'}}/>
                    <Typography.Title >
                        Vazirlik
                    </Typography.Title>
                </Card>
            </Col>
            <Col span={24}>
                <Typography.Title level={3}>Shifoxonalar reytingi</Typography.Title>
                <TableComponent dataSource={dataSource} columns={columns}/>
            </Col>
            
        </Row>
    )
}
