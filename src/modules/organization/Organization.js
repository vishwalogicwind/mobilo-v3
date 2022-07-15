import { Card } from 'antd';
import React from 'react';
import CommonTable from '../../components/CommonTable';
import CreateOrganization from './CreateOrganization';

function Organization() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: '1'
    },
    {
      title: 'Members',
      dataIndex: 'members',
      key: '2'
    },
    {
      title: 'License Owned',
      dataIndex: 'license',
      key: '3'
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: '4'
    }
  ];
  return (
    <Card title="Oragnizations" extra={<CreateOrganization />}>
      <CommonTable columns={columns} />
    </Card>
  );
}

export default Organization;
