import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  PAGE_OPTIONS,
  PAGINATION_DEFAULT_PAGE_SIZE
} from '../common/constants';

function CommonTable({
  columns,
  data,
  total,
  onChange,
  tableRowIsClickable = true,
  paginationConfig,
  ...rest
}) {
  const [paginationProps, setPaginationProps] = useState({
    pageSizeOptions: PAGE_OPTIONS,
    defaultPageSize: PAGINATION_DEFAULT_PAGE_SIZE,
    responsive: true,
    showSizeChanger: true,
    position: ['bottomRight']
  });
  useEffect(() => {
    setPaginationProps({ ...paginationProps, ...paginationConfig });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationConfig]);
  return (
    <div className={`${tableRowIsClickable ? 'pointer' : ''}`}>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={paginationConfig ? paginationProps : false}
        {...rest}
      />
    </div>
  );
}

export default CommonTable;
