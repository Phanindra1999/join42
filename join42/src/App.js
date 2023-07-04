import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UnorderedListOutlined,
  BankOutlined,
  UsergroupAddOutlined,
  BellOutlined,
  CalendarOutlined,
  UserOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

import { BrowserRouter as Router, Route, Link , Routes } from 'react-router-dom';

import CompanyComponent from './CompanyComponent';
import JobPostingsPage from './JobPostingsPage';

const { Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UnorderedListOutlined />}>
              <Link to="/job-postings">Job Postings</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BankOutlined />}>
              <Link to="/companies">Companies</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
              Students
            </Menu.Item>
            <Menu.Item key="4" icon={<BellOutlined />}>
              Announcements
            </Menu.Item>
            <Menu.Item key="5" icon={<CalendarOutlined />}>
              Calendar
            </Menu.Item>
            <Menu.Item key="6" icon={<UserOutlined />}>
              Alumni
            </Menu.Item>
            <Menu.Item key="7" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="8" icon={<InfoCircleOutlined />}>
              Institute
            </Menu.Item>
            <Menu.Item key="9" icon={<UserOutlined />}>
              Placement Officer Profile
            </Menu.Item>
            <Menu.Item key="10" icon={<BellOutlined />}>
              Notification Service
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* Content of the dashboard */}
              <Routes>
                <Route path="/job-postings" component={JobPostingsPage} />
                <Route path="/companies" component={CompanyComponent} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
