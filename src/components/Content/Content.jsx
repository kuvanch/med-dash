import { Content } from 'antd/lib/layout/layout'
import React from 'react'

export const ContentPage = ({children}) => {
    return (
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
    )
}
