import React, { useState } from 'react';
import { List, Button, Space, Badge, Modal, Card, Row, Col, Form, Input } from 'antd';
import { PlusOutlined, NotificationOutlined } from '@ant-design/icons';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Placement Drive - Software Developer, TechCo',
      description: 'Description for Announcement 1',
      date: '2023-07-20',
      views: 15,
    },
    {
      id: 2,
      title: 'Placement Drive - Frontend Engineer, WebSolutions',
      description: 'Description for Announcement 2',
      date: '2023-07-22',
      views: 8,
    },
    {
      id: 3,
      title: 'Placement Drive - Backend Developer, InnovateSoft',
      description: 'Description for Announcement 3',
      date: '2023-07-25',
      views: 20,
    },
  ]);

  const [showDescription, setShowDescription] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAnnouncementClick = (item) => {
    setSelectedAnnouncement(item);
    setShowDescription(true);
  };

  const handleDescriptionClose = () => {
    setShowDescription(false);
    setSelectedAnnouncement(null);
  };

  const handleCreateAnnouncement = (values) => {
    const newAnnouncement = {
      id: announcements.length + 1,
      title: values.title,
      description: values.description,
      date: new Date().toISOString().slice(0, 10),
      views: Math.floor(Math.random() * 100) + 1,
    };

    setAnnouncements([...announcements, newAnnouncement]);
    setShowForm(false);
  };

  const AnnouncementForm = () => (
    <Form onFinish={handleCreateAnnouncement}>
      <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter the description' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Row gutter={16}>
      <Col span={18}>
        <List
          itemLayout="horizontal"
          dataSource={announcements}
          renderItem={(item) => (
            <List.Item onClick={() => handleAnnouncementClick(item)}>
              <List.Item.Meta
                avatar={<NotificationOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                title={<a href="#">{item.title}</a>}
                description={
                  <Space>
                    {item.date} &nbsp;|&nbsp; <Badge count={item.views} showZero /> views
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      </Col>
      <Col span={6}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <Button type="primary" style={{ backgroundColor: '#26BAC7', color: '#fff' }} onClick={() => setShowForm(true)}>
            <PlusOutlined /> Create Announcement
          </Button>
        </div>
      </Col>

      {/* Description Card */}
      <Modal
        title={selectedAnnouncement?.title}
        visible={showDescription}
        onCancel={handleDescriptionClose}
        footer={null}
      >
        {selectedAnnouncement?.description}
      </Modal>

      {/* Create Announcement Form */}
      <Modal
        title="Create Announcement"
        visible={showForm}
        onCancel={() => setShowForm(false)}
        footer={null}
      >
        <AnnouncementForm />
      </Modal>
    </Row>
  );
};

export default Announcement;
