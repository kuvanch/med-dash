import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'

export const Sidebar = ({collapsed}) => {
   
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item className='menu__item' key="1" icon={<UserOutlined />}>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
    )
}


