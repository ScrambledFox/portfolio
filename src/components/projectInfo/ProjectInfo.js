import React from 'react'
import './ProjectInfo.css'
import { Fade } from 'react-reveal'
import ScrollContainer from 'react-indiana-drag-scroll'
import ScrollFade from '@benestudioco/react-scrollfade'

const ProjectInfo = (props) => {
  return (
    <div>
      <Fade bottom duration={1000} distance="100px">
        <div className="modal">
          <a onClick={props.close} className="modal-quit">
            ❌
          </a>
          <div className="modal-title">
            <Fade left duration={1000} distance="70px">
              <h1 className="modal-title-text">{props.data.name}</h1>
            </Fade>
            <Fade right duration={1000}>
              <div className="modal-title-underline"></div>
            </Fade>
          </div>
          <div className="modal-content">
            <div className="modal-about">
              {props.data.text.map((text) => (
                <p>{text}</p>
              ))}
            </div>
            {/* <ScrollContainer
              className="project-images"
              vertical={true}
              horizontal={false}
            > */}
            <div className="project-images">
              {props.data.images.map((image) => {
                return (
                  <li key={`image-${image}`}>
                    <Fade bottom duration={1000} distance="100px">
                      <img
                        className="project-image"
                        src={require(`../../images/images/${image}`)}
                        alt={`${image}-logo`}
                        onLoad={() => {}}
                      />
                    </Fade>
                  </li>
                )
              })}
            </div>
            {/* </ScrollContainer> */}
          </div>
          <div className="modal-footer">
            <p>{props.data.footnote}</p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default ProjectInfo
