import React from 'react'
import './ExperienceItem.css'

const ExperienceItem = ({ title, company, companyUrl, logoUrl, location, startDate, endDate, description }) => {
  return (
    <div className="experience-item">
      <img src={logoUrl} alt={`${company} logo`} className="company-logo" />
      <div className="experience-details">
        <h2>{title} </h2>
        <h3> <a href= {companyUrl}>{company} </a> </h3>
        <p>{startDate} - {endDate} | {location}</p>
        <ul>
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceItem
