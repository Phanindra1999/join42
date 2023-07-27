import React from 'react';
import JobPostingListPage from '../../../Components/po_jobposting/JobPostingList';
import JobPostingtilesPage from "../../../Components/po_jobposting/jobpostingtiles";
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
