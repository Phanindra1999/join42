import React from 'react';
import { Calendar, Card, Col, Row, Popover } from 'antd';

const CalendarComponent = () => {
  // Generate some sample data for random dates
  const data = {
    '2023-07-15': [
      { event: 'Drive', description: 'Description for Drive' },
     
    ],
    '2023-07-25': [
      { event: 'Drive', description: 'Description for Drive' },
    ],
  };

  function dateCellRender(value) {
    const date = value.format('YYYY-MM-DD');
    const events = data[date];

    if (events) {
      return (
        <div className="highlight-date">
          <ul className="events">
            {events.map((event, index) => (
              <li key={index}>
                <Popover content={event.description} title={event.event}>
                  <strong style={{ cursor: 'pointer' }}>{event.event}</strong>
                </Popover>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  }

  function getRandomRoles() {
    const roles = ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Product Manager'];
    const companyNames = ['TechCo', 'WebSolutions', 'InnovateSoft', 'CodeMasters', 'DataTech'];
    const randomRoles = [];

    for (let i = 0; i < 3; i++) {
      const randomRole = roles[Math.floor(Math.random() * roles.length)];
      const randomCompany = companyNames[Math.floor(Math.random() * companyNames.length)];
      randomRoles.push(`${randomRole} - ${randomCompany}`);
    }

    return randomRoles;
  }

  function getRandomDates() {
    const dates = [];

    for (let i = 0; i < 3; i++) {
      const randomMonth = Math.floor(Math.random() * 12) + 1;
      const randomDay = Math.floor(Math.random() * 28) + 1; // Assuming all months have 28 days for simplicity
      dates.push(`2023-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`);
    }

    return dates;
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <Calendar dateCellRender={dateCellRender} />
        </Col>
        <Col span={6}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title={getRandomRoles()[0]}>{getRandomDates()[0]}</Card>
            </Col>
            <Col span={24}>
              <Card title={getRandomRoles()[1]}>{getRandomDates()[1]}</Card>
            </Col>
            <Col span={24}>
              <Card title={getRandomRoles()[2]}>{getRandomDates()[2]}</Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CalendarComponent;
