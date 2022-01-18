import React from 'react'
import './Development.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Competencies from '../../components/competencies/Competencies'

const Development = () => {
  return (
    <Section title="Development">
      <div className="development-content">
        <Fade duration={1000}></Fade>
        <Competencies />
      </div>
    </Section>
  )
}

export default Development
