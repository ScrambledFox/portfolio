import React from 'react'
import './Future.css'
import Section from '../section/Section'
import { Fade } from 'react-reveal'
import FutureCard from '../futureCard/FutureCard'
import futureData from '../../data/future.json'

const Future = () => {
  return (
    <Section title="Future">
      <div className="future-content">
        <ul className="future-list">
          {futureData.future.map((future) => (
            <li key={`future-${future.id}`}>
              <Fade bottom duration={1000} distance="20px">
                <FutureCard future={future} />
              </Fade>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Future
