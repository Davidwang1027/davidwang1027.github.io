// Experience.js
import React from 'react';
import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Vividseats',
    companyUrl: 'http://vividseat.com/',
    logoUrl: "https://twitter.com/VividSeats/photo",
    startDate: 'Jan 2024',
    endDate: 'Present',
    description: [
    'Designed and implemented responsive B2C front-end solutions with React, Next.js, and AWS.', 
    'Build robust API integrations with backend products',
    'Techstack: React, Node.js, Next.js, Mocha, AWS, Swagger'
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experiences.map((exp) => (
        <ExperienceItem key={exp.id} {...exp} />
      ))}
    </section>
  );
};

export default Experience;
