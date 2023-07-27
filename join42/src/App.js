import JobPostingsPage from './pages/placement_officer/job_postings/JobPostingsPage';
import CompanyComponent from './pages/placement_officer/companies/CompanyPage';
import StudentPage from './pages/placement_officer/students/StudentPage';
import Announcements from './pages/placement_officer/announcements/Announcements';
import Calendar from './pages/placement_officer/calendar/Calendar';
import Alumni from './pages/placement_officer/alumni/Alumni';
import SettingsPage from './pages/placement_officer/settings/SettingsPage';
import Institute from './pages/placement_officer/institute/Institute';
import PlacementOfficerPage from './pages/placement_officer/placement_officer/PlacementOfficerPage';
import NotificationService from './pages/placement_officer/notification_service/NotificationService';
import Dashboard from './pages/placement_officer/dashboard/dashboard';


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
  DashboardOutlined
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
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to="/Dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UnorderedListOutlined />}>
              <Link to="/JobPostingsPage">Job Postings</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<BankOutlined />}>
              <Link to="/CompanyComponent">Companies</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UsergroupAddOutlined />}>
              <Link to="/StudentPage">Students</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<BellOutlined />}>
             <Link to="/Announcements">Announcements</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<CalendarOutlined />}>
              <Link to="/Calendar">Calendar</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<UserOutlined />}>
              <Link to="/Alumni">Alumni</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<SettingOutlined />}>
              <Link to="/SettingsPage">Settings</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<InfoCircleOutlined />}>
              <Link to="/Institute">Institute</Link>
            </Menu.Item>
            <Menu.Item key="10" icon={<UserOutlined />}>
              <Link to="/PlacementOfficerPage">Placement Officer Profile</Link>
            </Menu.Item>
            <Menu.Item key="11" icon={<BellOutlined />}>
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
                <Route exact path="/Dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
