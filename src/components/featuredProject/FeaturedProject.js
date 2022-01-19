import React from 'react'
import './FeaturedProject.css'

const FeaturedProject = ({ projectData, selectProject }) => {
  let { id, logo, name, link, description, colour, languages } = projectData
  return (
    <a
      className="featured-project-link"
      onClick={() => selectProject(projectData)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="featured-project-wrapper">
        <div className="featured-project">
          <div
            className="featured-project-bg"
            style={{
              background: colour,
            }}
          ></div>
          <div className="featured-project-top">
            <img
              className="featured-project-image"
              src={require(`../../images/logos/${logo
                .replace(/ /g, '')
                .toLowerCase()}.png`)}
              alt={`${logo}-logo`}
            />
          </div>
          <p>{description}</p>
          <div className="project-info">
            <div className="project-info-left">
              {languages.map((language) => (
                <div key={`${name}-${language.name}`} className="language">
                  <div
                    className="language-colour"
                    style={{ backgroundColor: `${language.color}` }}
                  ></div>
                  <p className="language-name">{language.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default FeaturedProject
