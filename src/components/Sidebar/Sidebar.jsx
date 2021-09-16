import { BankOutlined, ContainerOutlined, PlusSquareOutlined,  UserSwitchOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = ({collapsed}) => {
   
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item className='menu__item' key="1" icon={<PlusSquareOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/hospitals'>{!collapsed && 'Shifoxonalar'}</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ContainerOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/news'>{!collapsed && 'Yangiliklar'}</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserSwitchOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/consalting'>{!collapsed && 'Online Konsultasiya'}</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BankOutlined className={!collapsed ? '' : 'sidebar__icon'}/>}>
              <Link to='/minister'>{!collapsed && 'Vazirlik'}</Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}


