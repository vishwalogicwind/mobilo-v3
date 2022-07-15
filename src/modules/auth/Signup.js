import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Spin } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { ROUTES } from '../../common/constants';
import { formValidatorRules } from '../../common/utils';

const { required, email } = formValidatorRules;

const Login = () => {
  const onFinish = async () => {
    // signup action
  };
  return (
    <div className="gx-login-container">
      <Spin wrapperClassName="gx-login-content">
        <div className="gx-login-header gx-text-center mb-0">
          <img src={logo} alt="logo" style={{ width: '330px' }} />
        </div>
        <Form
          name="Login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="gx-login-form gx-form-row0"
        >
          <Form.Item name="login" rules={[required, email]}>
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
            <Button type="primary" className="w-100" htmlType="submit">
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
