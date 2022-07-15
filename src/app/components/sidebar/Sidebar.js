import { TeamOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { MODULES, ROUTES } from '../../../common/constants';
import UserProfile from '../header/UserProfile';

const { Sider } = Layout;

function Sidebar({ location: { pathname }, history }) {
  const onMenuSelect = (e) => {
    history.push(e.key);
  };

  return (
    <Sider trigger={null}>
      <div className="gx-sidebar-content">
        <Menu
          theme="lite"
          mode="inline"
          selectedKeys={[`/${pathname.split('/')[1]}`]}
          defaultSelectedKeys={[ROUTES.MAIN]}
          onSelect={onMenuSelect}
        >
          <Menu.Item key={ROUTES.MAIN} className="d-flex align-center">
            <TeamOutlined />
            <span>{MODULES.ORGANIZATION}</span>
          </Menu.Item>
        </Menu>
        <div className="logout-box">
          <UserProfile />
        </div>
      </div>
    </Sider>
  );
}

export default withRouter(Sidebar);
