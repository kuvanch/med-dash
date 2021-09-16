import React from 'react';
import {Table} from 'antd';


export const TableComponent = () => {



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

        return  <Table dataSource={dataSource} columns={columns} />;


};

