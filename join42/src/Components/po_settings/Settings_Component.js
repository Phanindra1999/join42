import React, { useState } from 'react';
import { Card, Row, Col, Switch, Tooltip, Input } from 'antd';

const Settings_Component = () => {
  const [emailNotification, setEmailNotification] = useState(true);
  const [smsNotification, setSmsNotification] = useState(false);
  const [pushNotification, setPushNotification] = useState(true);
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleEmailToggle = (checked) => {
    setEmailNotification(checked);
  };

  const handleSmsToggle = (checked) => {
    setSmsNotification(checked);
  };

  const handlePushToggle = (checked) => {
    setPushNotification(checked);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <Card title="Notification Settings">
        <Row gutter={[16, 16]}>
          <Col span={18}>
            <Tooltip title="Receive email notifications">
              <p>Email Notification</p>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Switch checked={emailNotification} onChange={handleEmailToggle} />
          </Col>
          <Col span={18}>
            <Tooltip title="Receive SMS notifications">
              <p>SMS Notification</p>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Switch checked={smsNotification} onChange={handleSmsToggle} />
          </Col>
          <Col span={18}>
            <Tooltip title="Receive push notifications">
              <p>Push Notification</p>
            </Tooltip>
          </Col>
          <Col span={6}>
            <Switch checked={pushNotification} onChange={handlePushToggle} />
          </Col>
        </Row>
      </Card>

      <Card title="Profile Settings">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <p>First Name</p>
            <Input value={firstName} onChange={handleFirstNameChange} />
          </Col>
          <Col span={12}>
            <p>Last Name</p>
            <Input value={lastName} onChange={handleLastNameChange} />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <p>Email</p>
            <Input value={email} onChange={handleEmailChange} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Settings_Component;
