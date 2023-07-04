import React from 'react';
import { Button } from 'antd';

const CompanyComponent = () => {
  const handleViewProfile = () => {
    // Logic for handling View Company Profile button click
  };

  const handleOpenings = () => {
    // Logic for handling Number of Openings button click
  };

  const handleViewJobPostings = () => {
    // Logic for handling View Job Postings button click
  };

  const handleContactDetails = () => {
    // Logic for handling Contact Details button click
  };

  const handleMetrics = () => {
    // Logic for handling Metrics button click
  };

  const handleInviteRecruitmentDrive = () => {
    // Logic for handling Invite for Recruitment Drive button click
  };

  return (
    <div>
      <h2>Section 1: List of Companies</h2>
      <Button type="primary" onClick={handleViewProfile}>
        View Company Profile
      </Button>
      <Button type="primary" onClick={handleOpenings}>
        Number of Openings
      </Button>

      <h2>Section 2: Open any Company</h2>
      <Button type="primary" onClick={handleViewJobPostings}>
        View Job Postings
      </Button>
      <Button type="primary" onClick={handleContactDetails}>
        Contact Details
      </Button>
      <Button type="primary" onClick={handleMetrics}>
        Metrics
      </Button>
      <Button type="primary" onClick={handleInviteRecruitmentDrive}>
        Invite for Recruitment Drive
      </Button>
    </div>
  );
};

export default CompanyComponent;
