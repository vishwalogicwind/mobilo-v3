import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Spin } from 'antd';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import logo from '../../assets/logo.png';
import { ROUTES } from '../../common/constants';
import { formValidatorRules } from '../../common/utils';

const { required, email } = formValidatorRules;

const Login = (props) => {
  const { initializeAuth } = useContext(AppContext);
  const [loginLoading, setLoginLoading] = useState(false);
  function successCallback(accessToken, userData) {
    initializeAuth(accessToken, userData);
    props.history.replace('/');
  }

  const onFinish = async (values) => {
    try {
      // login action
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('error from login => ', error);
    }
  };

  return (
    <div className="gx-login-container">
      <Spin spinning={loginLoading} wrapperClassName="gx-login-content">
        <div className="gx-login-header gx-text-center mb-0">
          <img src={logo} alt="Boilerplate" className="mb-4 fill-width" />
        </div>
        <Form
          name="Login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="gx-login-form gx-form-row0"
        >
          <Form.Item name="email" rules={[required, email]}>
            <Input
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item name="password" rules={[required]}>
            <Input.Password
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item className="gx-text-center w-100">
            <Button
              type="primary"
              style={{ width: '100%' }}
              className="w-100"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item className="d-flex mb-0 reset-password">
            <Link to={ROUTES.RESET}>Forgot password ?</Link>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default Login;
