import React from 'react';
import { Card, Avatar, Typography, Row, Col, Statistic } from 'antd';
import {
  UserOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  PercentageOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentFilled,
  LinkedinFilled,
  TeamOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ProfileComponent = () => {
  const placementOfficer = {
    name: 'John Doe',
    designation: 'Placement Officer',
    profilePicture: 'https://via.placeholder.com/100',
    about:
      'I am a dedicated placement officer with a strong passion for helping students achieve their career goals. With years of experience in the industry, I strive to connect students with the best opportunities and guide them through the placement process.',

    studentsPlaced: 350,
    successfulPlacements: 300,
    averageSalary: '₹7,50,000',
    placementRate: '85%',
    // Add more metrics data here
    email: 'john.doe@example.com',
    phone: '+1 123-456-7890',
    department: 'Career Services',
    location: 'City, State',
    linkedin: 'https://www.linkedin.com/in/johndoe',
  };

  const metrics = [
    {
      title: 'Students Helped Placed',
      value: placementOfficer.studentsPlaced,
      icon: <UserOutlined />,
    },
    {
      title: 'Successful Placements',
      value: placementOfficer.successfulPlacements,
      icon: <CheckCircleOutlined />,
    },
    {
      title: 'Average Salary',
      value: placementOfficer.averageSalary,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'Placement Rate',
      value: placementOfficer.placementRate,
      icon: <PercentageOutlined />,
    },
    // Add more metrics with icons here
  ];

  return (
    <div style={{ background: '#f0f2f5', width: '100%', padding: '20px' }}>
      <div
        style={{
          background: '#e6e6e6',
          padding: '20px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <div style={{ marginRight: '20px' }}>
          <Avatar size={100} src={placementOfficer.profilePicture} />
        </div>
        <div>
          <Title level={2}>{placementOfficer.name}</Title>
          <Title level={4}>{placementOfficer.designation}</Title>
        </div>
      </div>
      {/* Space between hero and cards section */}
      <div style={{ marginBottom: '20px' }}></div>
      <Row gutter={[16, 16]}>
        {metrics.map((metric, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              style={{
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 12px',
                background: '#fff',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  color: '#1890ff',
                  marginBottom: '8px',
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {metric.value}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '12px', fontSize: '16px' }}>{metric.icon}</div>
                <div>
                  <Title level={5} style={{ margin: 0 }}>
                    {metric.title}
                  </Title>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div
        style={{
          marginTop: '20px',
          background: '#fff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Title level={3}>Basic Information</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <div style={{ marginBottom: '16px' }}>
              <MailOutlined style={{ marginRight: '8px' }} />
              <span>{placementOfficer.email}</span>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <PhoneOutlined style={{ marginRight: '8px' }} />
              <span>{placementOfficer.phone}</span>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <UserOutlined style={{ marginRight: '8px' }} />
              <span>{placementOfficer.department}</span>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ marginBottom: '16px' }}>
              <EnvironmentFilled style={{ marginRight: '8px' }} />
              <span>{placementOfficer.location}</span>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <LinkedinFilled style={{ marginRight: '8px' }} />
              <a href={placementOfficer.linkedin} target="_blank" rel="noopener noreferrer">
                {placementOfficer.linkedin}
              </a>
            </div>
          </Col>
        </Row>
      </div>
      {/* Additional content */}
    </div>
  );
};

export default ProfileComponent;
