import React from 'react';
import {Table} from 'antd';


export const TableComponent = ({dataSource,columns}) => {
        return  <Table dataSource={dataSource} columns={columns} />;
};

