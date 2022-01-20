import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who am I?</h2>
            <p>I'm Joris.</p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I'm an Industrial Designer and Full-Stack Software Engineer
              working on social challenges by making use of emergant
              technologies such as Internet of Things, Artificial Intelligence
              and decentralised computing.
            </p>
            <p>
              <span role="img" aria-label="lightning">
                ⚡
              </span>{' '}
              I make custom software and hardware solutions for difficult design
              challenges.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                I love
              </p>
              <Typewriter
                options={{
                  strings: [
                    'creating IoT solutions',
                    'tinkering with new projects',
                    'building smart and helpful solutions',
                    'helping build a better world with design',
                    'a good challenge',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 25,
                }}
              />
              <p>.</p>
            </div>
            <p>
              Since 2016 - I've spent my time seeking and learning new
              technologies. By integrating my skills in software with design, I
              developed some awesome{' '}
              <Link
                className="textLink"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                projects
              </Link>
              , worked at some{' '}
              <Link
                className="textLink"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                amazing places
              </Link>
              , and worked with some great people. But I'm still not done - I've
              planned some great stuff for the{' '}
              <Link
                className="textLink"
                to="future"
                spy={true}
                smooth={true}
                duration={500}
              >
                future
              </Link>
              .
            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Eindhoven, The Netherlands</p>
            </div>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
