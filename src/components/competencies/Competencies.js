import React from 'react'
import './Competencies.css'
import { Fade } from 'react-reveal'
import CompetencyCard from '../../components/competencyCard/CompetencyCard'
import { competencies } from '../../data/competencies.json'

const Competencies = () => {
  return (
    <div className="competencies">
      <div className="competencies-content">
        <div className="competencies-list">
          {competencies.map((competency) => (
            <li key={`competency-${competency.id}`}>
              <Fade bottom duration={1000} distance="20px">
                <CompetencyCard competency={competency}></CompetencyCard>
              </Fade>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Competencies
