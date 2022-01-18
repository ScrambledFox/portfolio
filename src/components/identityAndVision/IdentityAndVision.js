import React, { useState } from 'react'
import './IdentityAndVision.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import profile from '../../images/cockpit flipped.png'

import { LoremIpsum } from 'react-lorem-ipsum'

const IdentityAndVision = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <Section title="Identity and Vision">
      <div className={`id-content${!imageLoaded ? ' hide' : ''}`}>
        <Fade duration={1000}>
          <div className="id-text">
            <h2>
              My Identity{' '}
              <span className="man-emoji" role="img" aria-label="man">
                🧔🏻
              </span>
            </h2>
            {/* <p> */}
            <LoremIpsum p={2} />
            {/* </p> */}
          </div>
          <img
            className="id-profile"
            alt="Joris Lodewijks profile"
            src={profile}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="id-text">
            <h2>
              My Vision{' '}
              <span className="eyes-emoji" role="img" aria-label="eyes">
                👀
              </span>
            </h2>
            {/* <p> */}
            <LoremIpsum p={2} />
            {/* </p> */}
          </div>
        </Fade>
      </div>
    </Section>
  )
}

export default IdentityAndVision
