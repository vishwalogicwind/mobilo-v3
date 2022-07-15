import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';

function CreateOrganization() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        + Create Organization
      </Button>
      <Modal
        title="Create Organization"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default CreateOrganization;
