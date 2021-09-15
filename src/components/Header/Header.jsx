import React from 'react'
import { MenuUnfoldOutlined,MenuFoldOutlined } from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';
export const HeaderPage = ({collapsed,handleTrigger}) => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: handleTrigger,
            })}
        </Header>
    )
}

 
