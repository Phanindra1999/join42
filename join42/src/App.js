import JobPostingsPage from './pages/job_postings/JobPostingsPage';
import CompanyComponent from './pages/companies/CompanyPage';
import StudentPage from './pages/students/StudentPage';
import Announcements from './pages/announcements/Announcements';
import Calendar from './pages/calendar/Calendar';
import Alumni from './pages/alumni/Alumni';
import SettingsPage from './pages/settings/SettingsPage';
import Institute from './pages/institute/Institute';
import PlacementOfficerPage from './pages/placement_officer/PlacementOfficerPage';
import NotificationService from './pages/notification_service/NotificationService';


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

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


const { Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UnorderedListOutlined />}>
              <Link to="/JobPostingsPage">Job Postings</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BankOutlined />}>
              <Link to="/CompanyComponent">Companies</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
              <Link to="/StudentPage">Students</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BellOutlined />}>
             <Link to="/Announcements">Announcements</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<CalendarOutlined />}>
              <Link to="/Calendar">Calendar</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<UserOutlined />}>
              <Link to="/Alumni">Alumni</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<SettingOutlined />}>
              <Link to="/SettingsPage">Settings</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<InfoCircleOutlined />}>
              <Link to="/Institute">Institute</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<UserOutlined />}>
              <Link to="/PlacementOfficerPage">Placement Officer Profile</Link>
            </Menu.Item>
            <Menu.Item key="10" icon={<BellOutlined />}>
              <Link to="/NotificationService">Notification Service</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* Content of the dashboard */}
              <Switch>
                <Route exact path="/JobPostingsPage" component={JobPostingsPage} />
                <Route exact path="/CompanyComponent" component={CompanyComponent} />
                <Route exact path="/StudentPage" component={StudentPage} />
                <Route exact path="/Announcements" component={Announcements} />
                <Route exact path="/Calendar" component={Calendar} />
                <Route exact path="/Alumni" component={Alumni} />
                <Route exact path="/SettingsPage" component={SettingsPage} />
                <Route exact path="/Institute" component={Institute} />
                <Route exact path="/PlacementOfficerPage" component={PlacementOfficerPage} />
                <Route exact path="/NotificationService" component={NotificationService} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
