import React, { useState } from 'react'
import './IdentityAndVision.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import profile from '../../images/cockpit flipped.png'

const IdentityAndVision = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <Section title="Identity and Vision">
      <div className={`id-content${!imageLoaded ? ' hide' : ''}`}>
        <Fade duration={1000}>
          <div className="id-text">
            <h2>
              My Vision{' '}
              <span className="eyes-emoji" role="img" aria-label="eyes">
                👀
              </span>
            </h2>
            <p>
              I see design as a tool to be able to fix users’ difficulties and
              challenges within the home and work environment. I seek to make
              our lives easier by linking our day-to-day life with technology.
              With a focus on user-centred and data-driven design, I want to
              provide useful products for the user that will reduce negative
              feelings and reduce their stress. By using emergent technologies
              such as artificial intelligence, users can be assisted in their
              everyday lives, letting the user focus on other tasks instead. To
              further reduce stress-of-use, I see rich interaction as a way to
              intuitively provide information to the user unconsciously. Data
              and information are better perceived if they can be felt or heard
              instead of being read. I want to create a connected environment,
              where information can be easily shared and used.
            </p>
            <p>
              An example for me is SpaceX, as the innovative and radical design
              approach they take in taking on space travel has shown that
              data-driven design and the use of emergent technologies can be
              very successful. For instance, the use of simulations of their
              landing software and hardware is a way to safely test products
              without the probability of causing harm or major costs.
            </p>
            <p>
              Due to the complex and rapid changing world around us, I find it
              important to keep looking to how the future world would look and
              that design must include future context as well. By looking at the
              past and integrating current trends, designs can be better
              prepared for the future, where smart products will be increasingly
              more prominent in our everyday life.
            </p>
          </div>
          <img
            className="id-profile"
            alt="Joris Lodewijks profile"
            src={profile}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="id-text">
            <h2>
              My Identity{' '}
              <span className="man-emoji" role="img" aria-label="man">
                🧔🏻
              </span>
            </h2>
            <p>
              With a focus on user-centred design, I design products by
              analysing gathered data and creating high-fidelity prototypes to
              be able to validate my concepts. Using my expertise in software
              and hardware design and engineering, I create useful and
              innovative prototypes for products using emergent technologies to
              provide more helpful functionality to users in their everyday
              lives.
            </p>
            <p>
              My expertise lies in creating powerful virtual prototypes fast.
              With a focus on internet-connected devices and artificial
              intelligence, I create connected software and hardware
              applications to make better tools for everyone.
            </p>
            <p>
              I see myself as a designer who can lead the design process but has
              no problem working together with the engineering team to provide a
              product. By being curious and keeping up with current trends and
              technologies. I provide a useful and unique skill set that I can
              use to solve social design challenges in a modern way.
            </p>
          </div>
        </Fade>
      </div>
    </Section>
  )
}

export default IdentityAndVision
