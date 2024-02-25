import React from 'react'
import PropTypes from 'prop-types' // Import PropTypes
import './ExperienceItem.css'

const ExperienceItem = ({ title, company, companyUrl, logoUrl, location, startDate, endDate, description }) => {
  return (
    <div className="experience-item">
      <img src={logoUrl} alt={`${company} logo`} className="company-logo" />
      <div className="experience-details">
        <h2>{title}</h2>
        <h3><a href={companyUrl}>{company}</a></h3>
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

// Define the PropTypes
ExperienceItem.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  companyUrl: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ExperienceItem
