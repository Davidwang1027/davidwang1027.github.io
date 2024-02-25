// Experience.js
import React from 'react'
import ExperienceItem from './ExperienceItem'

const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Vividseats',
    companyUrl: 'http://vividseat.com/',
    logoUrl: '/Vivid_Seats_logo.svg.png',
    location: 'Toronto, ON',
    startDate: 'Jan 2024',
    endDate: 'Apr 2024',
    description: [
      'Led the design and implementation of responsive B2C front-end solutions using React and Next.js, integrating with Swagger API to enhance customer engagement.',
      'Spearheaded the enhancement and migration of key features on the Vividseats website, significantly boosting user experience and conversion rates.',
      'Developed robust API integrations with backend systems, ensuring seamless data exchange and system reliability.',
      'Techstack: TypeScript, React, Next.js, Swagger API, Datadog'
    ]
  },
  {
    id: 2,
    title: 'Quality Engineer',
    company: 'Vividseats',
    companyUrl: 'http://vividseat.com/',
    logoUrl: '/Vivid_Seats_logo.svg.png',
    location: 'Toronto, ON',
    startDate: 'May 2023',
    endDate: 'Aug 2023',
    description: [
      'Engineered comprehensive front-end tests utilizing Java and Selenium, focusing on system reliability and user interface accuracy.',
      'Optimized test pipelines in Jenkins, achieving a 45% improvement in runtime efficiency.',
      'Verification of Jira tickets for product team, include tests of B2C product and backend services.'
    ]
  },
  {
    id: 3,
    title: 'Software Quality Assurance Analyst',
    company: 'Magnify Digital',
    companyUrl: 'https://www.magnifydigital.com/',
    logoUrl: '/magnify_digital_logo.png',
    location: 'Vancouver, BC',
    startDate: 'Sep 2022',
    endDate: 'Dec 2022',
    description: [
      'Executed thorough regression, end-to-end, and stress testing for ScreenMiner, ensuring high-quality releases and robust performance.',
      'Discovered and reported high-priority bugs in QA and Product environment before new features are released.',
      'Provided detailed analysis in bug reports and facilitated developers to identify the source of the problem.'
    ]
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Winner Technology',
    companyUrl: 'https://en.winnerinf.com/',
    logoUrl: '/winner_technology_logo.jpeg',
    location: 'Shanghai, China',
    startDate: 'May 2023',
    endDate: 'Aug 2023',
    description: [
      'Conducted Exploratory Data Analysis on 500k+ row of customer reviews',
      'Implemented the BERT language model to analyze customer reviews, achieving 87.3% accuracy in predicting customer preferences.',
      'Performed data cleaning, classification, and standardization of 40k+ customer reviews of restaurants'
    ]
  }

]

const Experience = () => {
  return (
    <section id="experience">
      {experiences.map((exp) => (
        <ExperienceItem key={exp.id} {...exp} />
      ))}
    </section>
  )
}

export default Experience
