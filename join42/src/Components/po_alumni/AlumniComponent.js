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

const AlumniComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [alumni, setAlumni] = useState([
    {
      key: '1',
      alumniName: 'John Doe',
      branch: 'Computer Science',
      yearOfPassing: '2010',
      email: 'john.doe@example.com',
      companyName: 'TechCorp',
      role: 'Software Engineer',
      linkedinLink: 'https://www.linkedin.com/in/johndoe',
    },
    {
      key: '2',
      alumniName: 'Jane Smith',
      branch: 'Electrical Engineering',
      yearOfPassing: '2012',
      email: 'jane.smith@example.com',
      companyName: 'PowerTech',
      role: 'Electrical Engineer',
      linkedinLink: 'https://www.linkedin.com/in/janesmith',
    },
    // Add more alumni data here
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
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
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

  const columns = [
    {
      title: 'Alumni Name',
      dataIndex: 'alumniName',
      key: 'alumniName',
      width: '15%',
      ...getColumnSearchProps('alumniName'),
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      key: 'branch',
      width: '10%',
      ...getColumnSearchProps('branch'),
    },
    {
      title: 'Year of Passing',
      dataIndex: 'yearOfPassing',
      key: 'yearOfPassing',
      width: '10%',
      ...getColumnSearchProps('yearOfPassing'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '20%',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
      width: '15%',
      ...getColumnSearchProps('companyName'),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: '15%',
      ...getColumnSearchProps('role'),
    },
    {
      title: 'LinkedIn Link',
      dataIndex: 'linkedinLink',
      key: 'linkedinLink',
      width: '15%',
      ...getColumnSearchProps('linkedinLink'),
    },
  ];

  return (
    <div style={{ background: '#f0f2f5', width: '100%', padding: '20px' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card style={{ borderRadius: '8px', background: '#fff' }}>
            <Title level={3} style={{ marginBottom: '16px' }}>
              Alumni Placement Metrics
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6} lg={6}>
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
                  <div style={{ marginRight: '12px', fontSize: '16px' }}>
                    <UserOutlined />
                  </div>
                  <div>
                    <Title level={5} style={{ margin: 0 }}>
                      Total Alumni
                    </Title>
                    <div>1000</div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
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
                  <div style={{ marginRight: '12px', fontSize: '16px' }}>
                    <CheckCircleOutlined />
                  </div>
                  <div>
                    <Title level={5} style={{ margin: 0 }}>
                      Placed Alumni
                    </Title>
                    <div>900</div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
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
                  <div style={{ marginRight: '12px', fontSize: '16px' }}>
                    <DollarCircleOutlined />
                  </div>
                  <div>
                    <Title level={5} style={{ margin: 0 }}>
                      Average Salary
                    </Title>
                    <div>₹10,00,000</div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6}>
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
                  <div style={{ marginRight: '12px', fontSize: '16px' }}>
                    <DollarCircleOutlined />
                  </div>
                  <div>
                    <Title level={5} style={{ margin: 0 }}>
                      Highest Salary
                    </Title>
                    <div>₹15,00,000</div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card style={{ borderRadius: '8px', background: '#fff', marginTop: '20px' }}>
            <Title level={3} style={{ marginBottom: '16px' }}>
              Alumni Data
            </Title>
            <div style={{ marginBottom: '16px' }}>
              <Input
                ref={searchInput}
                allowClear
                placeholder="Search alumni data"
                prefix={<SearchOutlined />}
                style={{ width: 200, marginRight: 8 }}
                onChange={(e) => handleSearch(e.target.value, 'alumniName')}
              />
              <Button onClick={() => handleReset()} style={{ marginRight: 8 }}>
                Reset
              </Button>
              <Button type="primary" onClick={() => {}}>
                Add Alumni
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={alumni}
              pagination={{ pageSize: 5 }}
              style={{ background: '#fff', borderRadius: '8px' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AlumniComponent;
