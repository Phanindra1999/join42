/*
import React, { useState, useEffect } from 'react';
import { Card, Skeleton, Pagination } from 'antd';

const JobPostingtilesPage = () => {
  const [loading, setLoading] = useState(true);
  const [jobPostings, setJobPostings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Display 6 tiles per page

  useEffect(() => {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
      const data = [
        {
          id: 1,
          title: 'Frontend Developer',
          company: 'ABC Tech Solutions',
          image: 'https://via.placeholder.com/200', // Replace with actual image URL
          updatedTime: '2 hours ago', // Replace with actual updated time
        },
        {
          id: 2,
          title: 'Software Engineer',
          company: 'XYZ Software',
          image: 'https://via.placeholder.com/200', // Replace with actual image URL
          updatedTime: '1 day ago', // Replace with actual updated time
        },
        {
          id: 3,
          title: 'Data Analyst',
          company: 'Data Co.',
          image: 'https://via.placeholder.com/200', // Replace with actual image URL
          updatedTime: '1 week ago', // Replace with actual updated time
        },
        {
            id: 3,
            title: 'Data Analyst',
            company: 'Data Co.',
            image: 'https://via.placeholder.com/200', // Replace with actual image URL
            updatedTime: '1 week ago', // Replace with actual updated time
          },
          {
            id: 3,
            title: 'Data Analyst',
            company: 'Data Co.',
            image: 'https://via.placeholder.com/200', // Replace with actual image URL
            updatedTime: '1 week ago', // Replace with actual updated time
          },
          {
            id: 3,
            title: 'Data Analyst',
            company: 'Data Co.',
            image: 'https://via.placeholder.com/200', // Replace with actual image URL
            updatedTime: '1 week ago', // Replace with actual updated time
          },
          {
            id: 3,
            title: 'Data Analyst',
            company: 'Data Co.',
            image: 'https://via.placeholder.com/200', // Replace with actual image URL
            updatedTime: '1 week ago', // Replace with actual updated time
          },
        // Add more job postings as needed
      ];

      setJobPostings(data);
      setLoading(false);
    }, 1500); // Simulating a 1.5-second delay
  }, []);

  // Calculate the total number of pages based on items per page
  const totalPages = Math.ceil(jobPostings.length / itemsPerPage);

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items to display on the current page
  const currentItems = jobPostings.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {loading ? (
          <>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
          </>
        ) : (
          currentItems.map((jobPosting) => (
            <Card key={jobPosting.id} style={{ width: 300 }}>
              <img
                src={jobPosting.image}
                alt="Job"
                style={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <div style={{ padding: '16px' }}>
                <h3>{jobPosting.title}</h3>
                <p>{jobPosting.company}</p>
                <p>Updated: {jobPosting.updatedTime}</p>
              </div>
            </Card>
          ))
        )}
      </div>
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={jobPostings.length}
        onChange={handlePageChange}
        style={{ marginTop: '16px', textAlign: 'center' }}
      />
    </div>
  );
};

export default JobPostingtilesPage;
*/


import React, { useState } from 'react';
import { List, Card, Button, Avatar, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const JobPostings = () => {
  // Sample data for job postings
  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'TechCo',
      location: 'New York',
      salary: '$100,000',
      description:
        'We are looking for a skilled software engineer to join our team...',
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'WebSolutions',
      location: 'San Francisco',
      salary: '$90,000',
      description:
        'We are seeking a talented frontend developer to create amazing user experiences...',
    },
    {
      id: 3,
      jobTitle: 'Backend Developer',
      company: 'InnovateSoft',
      location: 'London',
      salary: '£80,000',
      description:
        'Join our backend development team and help us build scalable and robust systems...',
    },
  ]);

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" style={{ backgroundColor: '#26BAC7', color: '#fff' }}>
          <PlusOutlined /> Create Job Posting
        </Button>
      </div>
      <List
        dataSource={jobPostings}
        renderItem={(item) => (
          <List.Item key={item.id} style={{ width: '100%', marginBottom: 16 }}>
            <Card
              title={`${item.jobTitle} at ${item.company}`}
              style={{ width: '100%' }}
              actions={[
                <Button type="link">View Details</Button>,
                <Button type="link">Apply</Button>,
              ]}
            >
              <Row gutter={16} style={{ marginBottom: 12 }}>
                <Col span={12}>
                  <p style={{ color: '#1890ff', fontSize: '16px', fontWeight: 'bold' }}>
                    {item.location}
                  </p>
                </Col>
                <Col span={12}>
                  <p style={{ color: '#ff4d4f', fontSize: '16px', fontWeight: 'bold' }}>
                    {item.salary}
                  </p>
                </Col>
              </Row>
              <p>{item.description}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default JobPostings;
