import React from 'react'
import { MenuUnfoldOutlined,MenuFoldOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';
import { Col, Dropdown, Input, Menu, Row} from 'antd';
export const HeaderPage = ({collapsed,handleTrigger}) => {
    const { Search } = Input;
    const onSearch = value => console.log(value);

    const menu = (
        <Menu>
          <Menu.Item key="0">
            UserName
          </Menu.Item>
          <Menu.Item key="1">
              Chiqish
          </Menu.Item>
        </Menu>
      );
    return (
        <Header className="site-layout-background"  style={{ padding: 0 }}>
           <Row align='middle'>
               <Col span={1}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: handleTrigger,
                    })}
               </Col>
                <Col span={9} offset={1} style={{display: 'flex',alignItems: 'center'}}>
                    <Search  placeholder="input search text" onSearch={onSearch} enterButton />
                </Col>
                <Col span={1} offset={11}>
                    <BellOutlined onClick={handleTrigger} style={{fontSize: '22px', display: 'flex', alignItems: 'flex-end'}}/>
                </Col>
                <Col span={1}>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <UserOutlined style={{fontSize: '22px', display: 'flex', alignItems: 'flex-end'}} />
                    </Dropdown>
                </Col>
           </Row>
        </Header>
    )
}

 
