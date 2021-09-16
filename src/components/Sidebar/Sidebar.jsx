import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = ({collapsed}) => {
   
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item className='menu__item' key="1" icon={<UserOutlined />}>
              <Link to='/hospitals'>Shifoxonalar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to='/news'>Yangiliklar</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to='/consalting'>Online Kansultasiya</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              <Link to='/minister'>Vazir</Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}


