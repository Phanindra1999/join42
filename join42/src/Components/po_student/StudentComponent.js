import React, { useState, useRef } from 'react';
import { Card, Row, Col, Typography, Table, Input, Button, Space, Select } from 'antd';
import {
  UserOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  SearchOutlined,
  FilterOutlined,
} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const StudentComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [students, setStudents] = useState([
    {
      key: '2',
      name: 'Jane Smith',
      branch: 'Electrical Engineering',
      year: 'Third Year',
      email: 'jane.smith@example.com',
      mobile: '+1 987-654-3210',
      cgpa: '9.0',
    },
    // Add more student data here
  ]);

  const searchInput = useRef(null);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput.current = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <FilterOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter searchWords={[searchText]} autoEscape textToHighlight={text.toString()} />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const renderStatisticCard = (icon, title, value) => {
    return (
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
          {value}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '12px', fontSize: '24px' }}>{icon}</div>
          <Title level={5} style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>
            {title}
          </Title>
        </div>
      </Card>
    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      key: 'branch',
      width: '15%',
      ...getColumnSearchProps('branch'),
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      width: '10%',
      ...getColumnSearchProps('year'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '20%',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
      width: '15%',
      ...getColumnSearchProps('mobile'),
    },
    {
      title: 'CGPA',
      dataIndex: 'cgpa',
      key: 'cgpa',
      width: '10%',
      ...getColumnSearchProps('cgpa'),
    },
  ];

  return (
    <div style={{ background: '#f0f2f5', width: '100%', padding: '20px' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card style={{ borderRadius: '8px', background: '#fff' }}>
            <Title level={3} style={{ marginBottom: '16px' }}>
              Student Placement Metrics
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6} lg={6}>
                {renderStatisticCard(<UserOutlined />, 'Total Students', '500')}
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                {renderStatisticCard(<CheckCircleOutlined />, 'Placed Students', '450')}
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                {renderStatisticCard(<DollarCircleOutlined />, 'Average Salary', '₹8,00,000')}
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
                {renderStatisticCard(<DollarCircleOutlined />, 'Highest Salary', '₹12,00,000')}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card style={{ borderRadius: '8px', background: '#fff', marginTop: '20px' }}>
            <Title level={3} style={{ marginBottom: '16px' }}>
              Students Data
            </Title>
            <div style={{ marginBottom: '16px' }}>
              <Input
                ref={searchInput}
                allowClear
                placeholder="Search student data"
                prefix={<SearchOutlined />}
                style={{ width: 200, marginRight: 8 }}
                onChange={(e) => handleSearch(e.target.value, 'name')}
              />
              <Button onClick={() => handleReset()} style={{ marginRight: 8 }}>
                Reset
              </Button>
              <Button type="primary" onClick={() => {}}>
                Add Student
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={students}
              pagination={{ pageSize: 5 }}
              style={{ background: '#fff', borderRadius: '8px' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StudentComponent;
