import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Spin } from 'antd';
import React from 'react';
import { ROUTES } from '../../common/constants';
import { formValidatorRules } from '../../common/utils';

const { required, email } = formValidatorRules;

const ResetPassword = (props) => {
  const onFinish = async () => {
    // forgot password action
  };
  return (
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className="gx-mb-4">
          <h2>Forgot Your Password ?</h2>
          <p>
            Don't worry. Recovering the password is easy.Just tell us the email.
          </p>
        </div>
        <Spin spinning={false}>
          <Form
            layout="vertical"
            onFinish={onFinish}
            className="gx-login-form gx-form-row0"
          >
            <Form.Item name="email" rules={[required, email]}>
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
              />
            </Form.Item>
            <div className="d-flex">
              <Form.Item>
                <Button type="primary" className="mr-2" htmlType="submit">
                  Reset Password
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={() => {
                    props.history.push(ROUTES.LOGIN);
                  }}
                >
                  Cancel
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Spin>
      </div>
    </div>
  );
};

export default ResetPassword;
