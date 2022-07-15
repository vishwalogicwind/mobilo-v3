import { Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <div className="gx-search-bar gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg">
        <Link to="/" className="gx-site-logo">
          <img src={logo} alt="Put your logo here" />
        </Link>
      </div>
    </Header>
  );
};
export default AppHeader;
