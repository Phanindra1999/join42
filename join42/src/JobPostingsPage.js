import React from 'react';

const JobPostingsPage = () => {
  const handleViewJobPostings = () => {
    // Handle logic for viewing job postings from companies
  };

  const handleCreateJobPosting = () => {
    // Handle logic for creating a job posting on behalf of a company and inviting the recruiter
  };

  return (
    <div>
      <h2>List of Job Postings</h2>
      <p>
        <button onClick={handleViewJobPostings}>
          View Job Postings from Companies
        </button>
      </p>
      <p>
        <button onClick={handleCreateJobPosting}>
          Create a Job Posting on Behalf of a Company and Invite the Recruiter
        </button>
      </p>
    </div>
  );
};

export default JobPostingsPage;
