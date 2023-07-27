import React, { useState } from 'react';
import { Card, Row, Col, Switch, Tooltip } from 'antd';

const NotificationComponent = () => {
  const [jobPostingsNotification, setJobPostingsNotification] = useState(true);
  const [applicationStatusNotification, setApplicationStatusNotification] = useState(true);
  const [interviewInvitationNotification, setInterviewInvitationNotification] = useState(false);
  const [interviewFeedbackNotification, setInterviewFeedbackNotification] = useState(true);

  const handleJobPostingsToggle = (checked) => {
    setJobPostingsNotification(checked);
  };

  const handleApplicationStatusToggle = (checked) => {
    setApplicationStatusNotification(checked);
  };

  const handleInterviewInvitationToggle = (checked) => {
    setInterviewInvitationNotification(checked);
  };

  const handleInterviewFeedbackToggle = (checked) => {
    setInterviewFeedbackNotification(checked);
  };

  const notificationData = [
    {
      key: 'jobPostingsNotification',
      label: 'Job Postings Notification',
      description: 'Notify the placement officer whenever a new job posting is added by a recruiter. This will help them keep track of the latest job opportunities available for students.',
    },
    {
      key: 'applicationStatusNotification',
      label: 'Application Status Update Notification',
      description: 'Notify the placement officer when a student\'s application status changes (e.g., application received, shortlisted, rejected). This will enable them to keep track of the progress of students\' job applications.',
    },
    {
      key: 'interviewInvitationNotification',
      label: 'Interview Invitation Notification',
      description: 'Notify the placement officer when a student is invited for an interview by a recruiter. This will help them coordinate interview schedules and provide necessary information to the student.',
    },
    {
      key: 'interviewFeedbackNotification',
      label: 'Interview Feedback Notification',
      description: 'Notify the placement officer when interview feedback is submitted by a recruiter for a student. This will allow them to provide feedback to students and track their performance.',
    },
  ];

  return (
    <div>
      <Card title="Notification Settings">
        {notificationData.map(({ key, label, description }) => (
          <Row key={key} gutter={[16, 16]} justify="space-between">
            <Col span={18}>
              <Tooltip title={description}>
                <p>{label}</p>
              </Tooltip>
            </Col>
            <Col span={6}>
              <Switch
                checked={key === 'jobPostingsNotification' ? jobPostingsNotification : key === 'applicationStatusNotification' ? applicationStatusNotification : key === 'interviewInvitationNotification' ? interviewInvitationNotification : interviewFeedbackNotification}
                onChange={(checked) => key === 'jobPostingsNotification' ? handleJobPostingsToggle(checked) : key === 'applicationStatusNotification' ? handleApplicationStatusToggle(checked) : key === 'interviewInvitationNotification' ? handleInterviewInvitationToggle(checked) : handleInterviewFeedbackToggle(checked)}
              />
            </Col>
          </Row>
        ))}
      </Card>
    </div>
  );
};

export default NotificationComponent;
