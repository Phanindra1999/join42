import React from 'react';
import { Card, Avatar, Typography, Row, Col, Statistic } from 'antd';
import {
  EnvironmentFilled,
  TeamOutlined,
  NumberOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const InstituteComponent = () => {
  const college = {
    name: 'ABC Institute of Technology',
    location: 'City, State',
    logo: 'https://via.placeholder.com/200',
    about:
      'ABC Institute of Technology is a premier institution dedicated to excellence in technology education. With state-of-the-art facilities and a strong focus on research and innovation, we strive to produce skilled professionals ready to take on the challenges of the future.',
    departments: 15,
    studentsEnrolled: 5000,
    placements: 95,
    averageSalary: '₹8,00,000',
  };

  const metrics = [
    {
      title: 'Departments',
      value: college.departments,
      icon: <TeamOutlined />,
    },
    {
      title: 'Students Enrolled',
      value: college.studentsEnrolled,
      icon: <NumberOutlined />,
    },
    {
      title: 'Placement Rate',
      value: `${college.placements}%`,
      icon: <CheckCircleOutlined />,
    },
    {
      title: 'Average Salary',
      value: college.averageSalary,
      icon: <DollarCircleOutlined />,
    },
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
        <img
          src={college.logo}
          alt="College Logo"
          style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
        />
        <div style={{ marginLeft: '20px' }}>
          <Title level={2}>{college.name}</Title>
          <Paragraph>{college.about}</Paragraph>
        </div>
      </div>
      <Row gutter={[16, 16]}>
        {metrics.map((metric, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={6}>
            <Card
              style={{
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                padding: '8px 12px',
                background: '#fff',
              }}
            >
              <div style={{ marginRight: '12px', fontSize: '16px' }}>{metric.icon}</div>
              <div>
                <Title level={5} style={{ margin: 0, display: 'inline-block' }}>
                  {metric.title}
                </Title>
                <Paragraph style={{ margin: 0 }}>{metric.value}</Paragraph>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Additional content */}
    </div>
  );
};

export default InstituteComponent;
