import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, Spin } from 'antd';
import React, { useState } from 'react';
import { ROUTES } from '../../common/constants';
import { formValidatorRules } from '../../common/utils';

const { required } = formValidatorRules;

const ChangePassword = (props) => {
  const { history, history: { location: { pathname } = {} } = {} } = props;
  const [loading, setLoading] = useState(false);

  if (pathname === ROUTES.VERIFY) {
    // reset token api
    return;
  }

  const onFinish = () => {
    setLoading(true);
    // Change password action
  };

  return (
    <div className="gx-login-container">
      <div className="gx-login-content">
        <div className="gx-mb-4">
          <h2>Change Password</h2>
          <p>Enter a new password for your account</p>
        </div>
        <Spin spinning={false}>
          <Form
            name="change-password"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className="gx-login-form gx-form-row0"
          >
            <Form.Item name="password" rules={[required]}>
              <Input.Password
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="retype-password"
              rules={[
                required,
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || value !== getFieldValue('password')) {
                      return Promise.reject(
                        new Error('Passwords do not match')
                      );
                    }
                    return Promise.resolve();
                  }
                })
              ]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Retype password"
              />
            </Form.Item>
            <div className="d-flex">
              <Form.Item>
                <Button
                  loading={loading}
                  type="primary"
                  className="mr-2"
                  htmlType="submit"
                >
                  Change Password
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={() => {
                    history.push(ROUTES.LOGIN);
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

export default ChangePassword;
