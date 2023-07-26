import React from 'react';
import JobPostingListPage from '../../Components/jobposting/JobPostingList';
import JobPostingtilesPage from "../../Components/jobpostingtiles";
const JobPostingsPage = () => {
  // Your component logic and JSX here
  return (
    <div>
      <h2>Job Postings Page</h2>
      {/* <JobPostingListPage /> */}
      <JobPostingtilesPage />
      {/* Additional content */}
    </div>
  );
};

export default JobPostingsPage;
