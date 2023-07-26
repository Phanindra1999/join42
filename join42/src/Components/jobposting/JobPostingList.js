import React, { useState, useEffect } from 'react';
import { List, Avatar, Skeleton } from 'antd';

const JobPostingListPage = () => {
  const [loading, setLoading] = useState(true);
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
      const data = [
        {
          id: 1,
          title: 'Frontend Developer',
          company: 'ABC Tech Solutions',
        },
        {
          id: 2,
          title: 'Software Engineer',
          company: 'XYZ Software',
        },
        {
          id: 3,
          title: 'Data Analyst',
          company: 'Data Co.',
        },
      ];

      setJobPostings(data);
      setLoading(false);
    }, 1500); // Simulating a 1.5-second delay
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
                title={<a href={`/jobs/${jobPosting.id}`}>{jobPosting.title}</a>}
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
