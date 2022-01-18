import React, { useRef } from 'react'
import IsVisible from 'react-is-visible'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import { skills } from '../../data/skills.json'
import { useContainerDimensions } from '../../hooks'

const Skills = () => {
  const skillsWrapper = useRef()
  const { width } = useContainerDimensions(skillsWrapper)

  return (
    <Fade duration={1000}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 600 }}>
        <IsVisible once>
          {(isVisibleSkillsWrapper) => (
            <div
              className="skills-wrapper"
              style={
                isVisibleSkillsWrapper
                  ? {
                      transition: '1s opacity ease-in-out',
                      transform: `translateX(0)`,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <h2>Skills</h2>

              <ul className="skills" ref={skillsWrapper}>
                <Link
                  className="textLink"
                  to="development"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {skills.map((skills) => {
                    return (
                      <li className="skill-bar-wrapper" key={skills.skillName}>
                        <div
                          className="skill-bar"
                          style={
                            isVisibleSkillsWrapper
                              ? {
                                  transition: `${
                                    1 + skills.id / 10
                                  }s width ease-in-out`,
                                  width: width * (skills.amount / 100),
                                }
                              : {
                                  width: 1,
                                }
                          }
                        ></div>
                        <div className="skill-name">{skills.skillName}</div>
                      </li>
                    )
                  })}
                </Link>
              </ul>
            </div>
          )}
        </IsVisible>
      </div>
    </Fade>
  )
}

export default Skills
