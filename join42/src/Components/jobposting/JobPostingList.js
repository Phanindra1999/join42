import React, { useState, useEffect } from 'react';
import { List, Avatar, Skeleton } from 'antd';

const JobPostingListPage = () => {
  const [loading, setLoading] = useState(true);
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
      const mockData = [
        { id: 1, title: 'Job Posting 1', company: 'Company A' },
        { id: 2, title: 'Job Posting 2', company: 'Company B' },
        { id: 3, title: 'Job Posting 3', company: 'Company C' },
        { id: 4, title: 'Job Posting 4', company: 'Company D' },
        { id: 5, title: 'Job Posting 5', company: 'Company E' },
      ];

      setJobPostings(mockData);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <Skeleton active />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={jobPostings}
          renderItem={(jobPosting) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://via.placeholder.com/50" />}
                title={<a href="#">{jobPosting.title}</a>}
                description={jobPosting.company}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default JobPostingListPage;
